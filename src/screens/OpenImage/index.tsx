import React from 'react';
import {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  PermissionsAndroid,
} from 'react-native';
import {getApiFileSize} from '../../api';
import RNFetchBlob from 'react-native-fetch-blob';
import Styles from './styles';
import {Alert} from 'react-native';
import {downloadCacheControl} from '../../helpers';
import FileViewer from 'react-native-file-viewer';
import AsyncStorage from '@react-native-community/async-storage';

const OpenImage = ({route}) => {
  const [size, setSize] = useState<any>();

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

  const getImageSize = async () => {
    setSize('waiting...');
    const responeSize = await getApiFileSize(imageUrl);
    setSize(responeSize);
  };
  useEffect(() => {
    getImageSize();
  }, []);

  const {imageUrl} = route.params;

  const downloadImage = async () => {
    const ResponseRead = await requestReadFile();
    const ResponseWrite = await requestWriteFile();
    if (
      ResponseRead === PermissionsAndroid.RESULTS.GRANTED &&
      ResponseWrite === PermissionsAndroid.RESULTS.GRANTED
    ) {
      const responseLastData = await downloadCacheControl('', imageUrl);
      if (responseLastData) {
        await FileViewer.open(responseLastData.path);
      }
    } else {
      alert('you must give permission to download');
    }
  };

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.imageContainer}>
        <Image style={Styles.image} source={{uri: imageUrl}} />
      </View>
      <View style={Styles.buttonContainer}>
        <TouchableOpacity onPress={downloadImage} style={Styles.button}>
          <View style={Styles.containerInButton}>
            <Text style={Styles.buttonText}>{size}</Text>
          </View>
          <View />
          <View
            style={[
              Styles.containerInButton,
              Styles.downloadContainerInButton,
            ]}>
            <Text style={Styles.buttonText}>Download</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OpenImage;
