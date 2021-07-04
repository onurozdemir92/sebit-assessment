import AsyncStorage from '@react-native-community/async-storage';
import RNFetchBlob from 'react-native-fetch-blob';
import FileViewer from 'react-native-file-viewer';
import {getFileSize} from './Api';

export const downloadCacheControl = async (
  _fileName: string,
  urlFile: string,
) => {
  const fileSize = await getFileSize(urlFile);
  const downloadFile = await AsyncStorage.getItem('downloadedFiles');
  const save = (type: string) => {
    const fileName = urlFile.split('/');

    const path =
      RNFetchBlob.fs.dirs.DownloadDir + '/' + fileName[fileName.length - 1];
    RNFetchBlob.fs.df().then(response => {
      if (Number(response.external_free) < Number(fileSize)) {
        alert('no memory');
      } else {
        RNFetchBlob.config({
          // add this option that makes response data to be stored as a file,
          // this is much more performant
          fileCache: false,
          addAndroidDownloads: {
            useDownloadManager: true,
            notification: true,
            path: path,
          },
        });
        const a = RNFetchBlob.fetch('GET', urlFile);
        RNFetchBlob.config({
          // add this option that makes response data to be stored as a file,
          // this is much more performant
          fileCache: false,
          addAndroidDownloads: {
            useDownloadManager: true,
            notification: false,
            path: path,
          },
        })
          .fetch('GET', urlFile, {
            //some headers ..
          })
          .then(async res => {
            // the temp file path
            let storageData: any[];
            if (type === 'new') {
              storageData = [
                {
                  fileName: fileName[fileName.length - 1],
                  path: res.path(),
                  date: new Date(),
                },
              ];
            } else {
              const data: any[] = JSON.parse(downloadFile);
              const newDate = data.filter(
                item => item.fileName != fileName[fileName.length - 1],
              );
              storageData = [
                {
                  fileName: fileName[fileName.length - 1],
                  path: res.path(),
                  date: new Date(),
                },
                ...newDate,
              ];
            }

            AsyncStorage.setItem(
              'downloadedFiles',
              JSON.stringify(storageData),
            );
            await FileViewer.open(res.path());
            console.log('The file saved to ', res.path());
          });
      }
    });
  };

  if (downloadFile) {
    const data: any[] = JSON.parse(downloadFile);
    const fileName = urlFile.split('/');
    const findData = data.find(
      item => item.fileName == fileName[fileName.length - 1],
    );
    if (findData) {
      const now = new Date();
      const cacheDate = new Date(findData.date);
      const difference = now - cacheDate;
      const diffMins = Math.round(((difference % 86400000) % 3600000) / 60000);
      if (diffMins < 10) {
        return findData;
      } else {
        RNFetchBlob.fs
          .unlink(findData.path)
          .then(response => {
            save('update');
          })
          .catch(err => console.log('delete err :', err));
      }
      // return findData
    } else {
      save('update');
    }
  } else {
    save('new');
  }
};
