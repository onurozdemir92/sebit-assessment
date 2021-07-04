import React from 'react';
import {Dimensions, SafeAreaView, View} from 'react-native';
import WebView from 'react-native-webview';
const Question = ({route, navigation}) => {
  const {QId, QData} = route.params;
  setTimeout;
  const addScript = `setTimeout(()=>{window.SebitInterface.showPreloader()},2000)`;
  return (
    <View style={{flex: 1}}>
      <WebView
        injectedJavaScript={addScript}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        javaScriptEnabledAndroid={true}
        source={{html: QData[0].html}}
      />
    </View>
  );
};

export default Question;
