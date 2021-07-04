import { getFileSize, getDates } from '../helpers/Api';

const getFiles = async () => {
  return await getDates(
    'https://sebit.s3.eu-central-1.amazonaws.com/androiddata.json',
  );
};

export const getApiFileSize = async (url: string) => {
  const size = ((Number(await getFileSize(url)) / 1024) / 1204).toString()
  return size.slice(0, 5)+' Mb'
}

export default getFiles;
