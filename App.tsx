import React from 'react';
import { Platform, StyleSheet, Text, StatusBar, SafeAreaView, LogBox } from 'react-native';
import Home from './screens/Home';

export default function App() {
  // console.ignoredYellowBox = ['Require cycle: node_modules/react-native-paper'];
  LogBox.ignoreLogs([
    'Require cycle:'
  ]);
  return (<Home />);
}
