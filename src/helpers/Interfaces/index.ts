type TFiles = 'pdf' | 'gallery' | 'question' | 'video';

interface IImages {
  thumb: string;
  original: string;
}

interface IQuestions {
  html: string;
  description: string;
}

interface ITags {
  html: string;
  positionToGo: number;
}

export interface IFiles {
  contentType: TFiles;
  fileUrl?: string;
  title: string;
  desciription: string;
  images?: IImages[];
  questions?: IQuestions[];
  tags?: ITags[];
}
