import { StyleSheet } from 'react-native';

import { Colors } from '../../config';

export default StyleSheet.create({
  boxContainer: {
    height: 50,
  },
  boxContainerWithBG: {
    height: 50,
    backgroundColor: Colors.bgNavbarBack,
  },
  container: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    position: 'relative',
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    color: Colors.white,
    flex: 1,
  },
  box: {
    position: 'absolute',
    zIndex: 10,
  },
  backIcon: {
    marginLeft: 15,
  },
});
