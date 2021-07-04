import React, {useEffect} from 'react';
import {useState} from 'react';
import {Text, View, SafeAreaView, FlatList} from 'react-native';
import getFiles from '../../api';
import FilesComponent from '../../components/FilesComponent';
import {IFiles} from '../../helpers/Interfaces';

const Home = ({navigation}) => {
  const [data, setData] = useState<IFiles[]>();

  async function getDate() {
    const responseData = await getFiles();
    if (responseData) {
      setData(responseData);
    } else {
    }
  }

  useEffect(() => {
    getDate();
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={({item, index}) => (
          <FilesComponent navigation={navigation} key={index} item={item} />
        )}
        keyExtractor={(item: IFiles, index: number) => index.toString()}
      />
    </SafeAreaView>
  );
};

export default Home;
