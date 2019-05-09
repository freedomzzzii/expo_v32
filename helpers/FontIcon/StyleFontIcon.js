import { StyleSheet } from 'react-native';

import { Colors } from '../../config';

export default StyleSheet.create({
  countContainer: {
    backgroundColor: Colors.orange,
    position: 'absolute',
    right: -2,
    top: -5,
    borderRadius: 50,
    padding: 1,
    minWidth: 15,
  },
  count: {  
    color: Colors.white,
    fontSize: 10,
    textAlign: 'center',
  },
  icon: {
    position: 'relative',
  },
});
