import React, { Component } from 'react';
import { Modal, View, ActivityIndicator } from 'react-native';

import styles from './StyleLoading';

import { Colors } from '../../../config';

export default class Loading extends Component {
  render() {
    return(
      <Modal
        transparent
        visible
      >
        <View style={{ ...styles.container, ...styles.horizontal }}>
          <ActivityIndicator size="large" color={Colors.orange} />
        </View>
      </Modal>
    );
  }
}
