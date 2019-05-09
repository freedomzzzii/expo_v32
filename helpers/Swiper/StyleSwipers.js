import { StyleSheet } from 'react-native';

import { Colors } from '../../config';

export default StyleSheet.create({
  imageSwiperWrapper: {
    height: 350,
  },
  imageSwiperSlide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.grey,
  },
  imageSwiperImg: {
    width: '100%',
    height: '100%', 
    resizeMode:'contain',
  },
});
