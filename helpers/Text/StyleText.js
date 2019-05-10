import { StyleSheet } from 'react-native';

import { Colors } from '../../config';

export default StyleSheet.create({
  boldText: {
    fontFamily: 'prompt-bold',
  },
  plainText: {
    fontFamily: 'prompt',
  },
  linkText: {
    fontFamily: 'prompt-bold',
    color: Colors.blue,
    textDecorationLine: 'underline',
  },
});
