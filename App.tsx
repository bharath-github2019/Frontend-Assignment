import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Video } from 'expo-av';

export default function App() {
  const videoUri = 'https://drive.google.com/uc?export=download&id=1pSsVlQog-XSMrXTKXCANejkJLm4roejo'; // your video
  const subtitleUri = 'https://drive.google.com/uc?export=download&id=1FPwvKtPTbk8HVFyCw6u50e-jU5rPlb3I'; // your subtitles

  return (
    <View style={styles.container}>
      <Video
        source={{ uri: videoUri }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="contain"
        shouldPlay
        useNativeControls
        style={{ width: '100%', height: 300 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
