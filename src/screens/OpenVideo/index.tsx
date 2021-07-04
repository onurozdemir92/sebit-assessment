import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import WebView from 'react-native-webview';
import Styles from './Styles';

const OpenVideo = ({route}) => {
  const [video, setVideo] = useState<string>();
  const {tags} = route.params;
  const gotoTime = (minute: number) => {
    setVideo(
      "<video   width='%100' id='video1' controls='controls' autoplay='autoplay'><source src='" +
        tags.videoUrl +
        "' type='video/mp4' />Tarayıcınız video etiketini desteklemiyor.</video><script>document.getElementById('video1').currentTime =" +
        minute +
        '</script>',
    );
  };

  useEffect(() => {
    gotoTime(0);
  }, []);

  return (
    <SafeAreaView style={Styles.container}>
      <WebView style={Styles.videoView} source={{html: video}} />
      <ScrollView style={Styles.scrollView}>
        {tags.tags.map(item => (
          <WebView style={Styles.tagsWebView} source={{html: item.html}} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default OpenVideo;
