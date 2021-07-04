import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {IFiles} from '../../../helpers/Interfaces';
import Styles from './styles';

interface IGalleryComponent {
  item: IFiles;
  navigation: any;
}

const GalleryComponent = ({item, navigation}: IGalleryComponent) => {
  return (
    <View style={Styles.container}>
      <View style={Styles.subContainer}>
        <Text style={Styles.titleText}>Title: {item.title}</Text>
        <Text style={Styles.titleText}>Desciription: {item.desciription}</Text>

        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          {item.images?.map((item, index) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('OpenImage', {imageUrl: item.original})
              }
              key={index}
              style={Styles.imageContainer}>
              <Image style={Styles.image} source={{uri: item.original}} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default GalleryComponent;
