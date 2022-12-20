import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {ThemeProvider} from '@rneui/themed';
import HomeScreen from './src/theme/screens/Home/index';
import {colors, sizes} from './src/theme/colors';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ThemeProvider theme={{colors, sizes: sizes}}>
        <HomeScreen />
      </ThemeProvider>
    </SafeAreaView>
  );
}
