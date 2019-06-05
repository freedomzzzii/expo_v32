import { StyleSheet } from 'react-native';

import { Colors } from '../../config';

export default StyleSheet.create({
  textStyle: {
    fontFamily: 'prompt-bold',
    textAlign: 'center',
  },
  container: {
    width: '100%',
    padding: 10,
  },
  shapeButton: {
    borderRadius: 50,
  },
  primaryText: {
    color: Colors.white,
    fontSize: 15,
  },
  secondaryText: {
    color: Colors.white,
  },
  primaryColor: {
    backgroundColor: Colors.btnPrimary,
  },
  secondaryColor: {
    backgroundColor: Colors.btnSecondary,
  },
});
