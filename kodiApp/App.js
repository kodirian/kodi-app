import React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <WebView 
      source={{uri: 'https://kodirian.github.io/'}}
      style= {{marginTop: 30}}
    />

  );
}
