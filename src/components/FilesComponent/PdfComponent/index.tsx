import React, {useEffect} from 'react';
import {
  Image,
  PermissionsAndroid,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IFiles} from '../../../helpers/Interfaces';
import Icon from '../../../assets/Images/pdf.png';
import Styles from './styles';
import {useState} from 'react';
import FileViewer from 'react-native-file-viewer';
import {getApiFileSize} from '../../../api';
import {downloadCacheControl} from '../../../helpers';

interface IPdfComponent {
  item: IFiles;
}

const PdfComponent = ({item}: IPdfComponent) => {
  const [fileSize, setFileSize] = useState<any>(0);
  const getSize = async () => {
    setFileSize('Waiting...');
    const size = await getApiFileSize(item.fileUrl);
    setFileSize(size);
  };
  useEffect(() => {
    getSize();
  }, []);
  const requestReadFile = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      );
      return granted;
    } catch (err) {
      console.warn(err);
    }
  };
  const requestWriteFile = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      );
      return granted;
    } catch (err) {
      console.warn(err);
    }
  };
  const downloadImage = async () => {
    const ResponseRead = await requestReadFile();
    const ResponseWrite = await requestWriteFile();
    if (
      ResponseRead === PermissionsAndroid.RESULTS.GRANTED &&
      ResponseWrite === PermissionsAndroid.RESULTS.GRANTED
    ) {
      const responseLastData = await downloadCacheControl('', item.fileUrl);
      if (responseLastData) {
        await FileViewer.open(responseLastData.path);
      }
    } else {
      alert('you must give permission to download');
    }
  };

  return (
    <View style={Styles.container}>
      <TouchableOpacity onPress={downloadImage} style={Styles.subContainer}>
        <View style={Styles.imageContainer}>
          <Image source={Icon} style={Styles.image} />
        </View>
        <View style={Styles.textContainer}>
          <Text>Title: {item.title}</Text>
          <Text>Desciription: {item.desciription}</Text>
          <Text>File Size: {fileSize}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PdfComponent;
