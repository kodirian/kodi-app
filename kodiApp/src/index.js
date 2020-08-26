 
import React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <WebView
      source={{ uri: 'https://kodirian.github.io/' }}
      injectedJavaScript="window.alert('first message')"
      injectJavaScript={() => {
        return "window.alert('second message')";
      }}
    />
  );
}
