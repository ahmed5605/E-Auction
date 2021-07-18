import React from 'react';
import { StyleSheet, Text, View, LogBox, StatusBar } from 'react-native';
import TabScreen from './src/TabScreen';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <NavigationContainer>
       <StatusBar backgroundColor="black" />
      <TabScreen />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
