import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Styles from './styles';
import Icon from '../../../assets/Images/question-mark.png';
import {IFiles} from '../../../helpers/Interfaces';

interface IQuestionComponent {
  item: IFiles;
  navigation: any;
}

const QuestionComponent = ({item, navigation}: IQuestionComponent) => {
  return (
    <View style={Styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Question', {QId: 0, QData: item.questions})
        }
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

export default QuestionComponent;
