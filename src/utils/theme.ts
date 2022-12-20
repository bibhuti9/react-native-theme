import {useTheme, useThemeMode} from '@rneui/themed';
export function themeFunction() {
  const {theme} = useTheme();
  return {theme};
}
export function updateThemes() {
  const {theme, updateTheme} = useTheme();
  return {updateTheme};
}
export function useThemeModes() {
  const {mode, setMode} = useThemeMode();
  return {mode, setMode};
}
