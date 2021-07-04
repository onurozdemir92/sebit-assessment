import React from 'react';
import {IFiles} from '../../helpers/Interfaces';
import GalleryComponent from './GalleryComponent';
import PdfComponent from './PdfComponent';
import QuestionComponent from './QuestionComponent';
import VideoComponent from './VideoComponent';

interface IFilesComponent {
  item: IFiles;
  navigation: any;
}

const FilesComponent = ({item, navigation}: IFilesComponent) => {
  switch (item.contentType) {
    case 'pdf':
      return <PdfComponent item={item} />;
    case 'gallery':
      return <GalleryComponent navigation={navigation} item={item} />;
    case 'video':
      return <VideoComponent navigation={navigation} item={item} />;
    case 'question':
      return <QuestionComponent navigation={navigation} item={item} />;
    default:
      return <PdfComponent item={item} />;
  }
};

export default FilesComponent;
