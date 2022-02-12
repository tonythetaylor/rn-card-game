import { StatusBar, Platform } from 'react-native';

if (Platform.OS === 'ios') {
  StatusBar.setBarStyle('light-content');
}
if (Platform.OS === 'android') {
  StatusBar.setBackgroundColor('white');
}
