import React, { Component } from 'react';
import Swiper from 'react-native-swiper';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';
import { IMG_URL } from 'react-native-dotenv';

import styles from './StyleSwipers';

export default class Swipers extends Component {
  handleImage = () => {
    const { img } = this.props;

    return img.map(ele => (
      <View style={styles.imageSwiperSlide} key={Math.random()}>
        <Image
          style={styles.imageSwiperImg}
          source={{ uri: `${IMG_URL}${ele}` }}
        />
      </View>
    ));
  }

  render () {
    const { img } = this.props;

    if (img.length === 0) {
      return null;
    }

    return(
      <Swiper style={styles.imageSwiperWrapper} showsButtons={false}>
        {this.handleImage()}
      </Swiper>
    );
  }
}

Swipers.propTypes = {
  img: PropTypes.array.isRequired,
};
