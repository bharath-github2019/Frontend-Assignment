import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import VideoPlayer from './components/VideoPlayer';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <VideoPlayer
        videoUri="https://Instagram Reels Video 949.mp4"
        subtitleUri="https://subtitles.ass"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
  },
});
