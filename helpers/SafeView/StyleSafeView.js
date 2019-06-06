import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  box: {
    flex: 1,
    zIndex: -1,
  },
  boxSafeAreaView: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 25 : 0,
  },
  topNbottom: {
    flex: 0,
    zIndex: -1,
  },
});
