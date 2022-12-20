import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {themeFunction, updateThemes, useThemeModes} from '../../../utils/theme';
export default function HomeScreen() {
  const {theme} = themeFunction();
  const {updateTheme} = updateThemes();
  const {mode, setMode} = useThemeModes();
  console.log(mode);
  return (
    <View style={{backgroundColor: theme.colors.primary, flex: 1}}>
      <TouchableOpacity
        onPress={() => {
          updateTheme({colors: {primary: 'pink'}});
        }}>
        <Text>Click</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setMode('dark')}>
        <Text>Change Mode</Text>
      </TouchableOpacity>
    </View>
  );
}
