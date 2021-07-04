import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {IFiles} from '../../../helpers/Interfaces';
import Icon from '../../../assets/Images/video.png';
import Styles from './styles';

interface IVideoComponent {
  item: IFiles;
  navigation: any;
}

const VideoComponent = ({item, navigation}: IVideoComponent) => {
  return (
    <View style={Styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('OpenVideo', {tags: item})}
        style={Styles.subContainer}>
        <View style={Styles.imageContainer}>
          <Image source={Icon} style={Styles.image} />
        </View>
        <View style={Styles.textContainer}>
          <Text>Title: {item.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default VideoComponent;
