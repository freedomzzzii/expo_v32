import { StyleSheet } from 'react-native';

import { Colors } from '../../../config';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.bgLoading,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  loading: {
    color: Colors.orange,
  },
});
