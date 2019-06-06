import React, { Component, Fragment } from 'react';
import { SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo';
import PropTypes from 'prop-types';

import styles from './StyleSafeView';

import { Colors } from '../../config';

export default class SafeView extends Component {
  render() {
    const { gradient, bottom, children } = this.props;
    
    if (gradient, bottom) {
      return (
        <Fragment>
          <LinearGradient
            style={styles.box}
            colors={[Colors.linearGradient1, Colors.linearGradient2, Colors.linearGradient3]}
            start={[0, 1]}
            end={[1, 0]}
          >
            <SafeAreaView style={styles.boxSafeAreaView}>
              {children}
            </SafeAreaView>
          </LinearGradient>
          <SafeAreaView style={{ ...styles.topNbottom, ...bottom }} />
        </Fragment>
      );
    } else if (gradient) {
      return (
        <LinearGradient
          style={styles.box}
          colors={[Colors.linearGradient1, Colors.linearGradient2, Colors.linearGradient3]}
          start={[0, 1]}
          end={[1, 0]}
        >
          <SafeAreaView style={styles.boxSafeAreaView} {...this.props} />
        </LinearGradient>
      );
    }
    return (
      <SafeAreaView style={styles.boxSafeAreaView} {...this.props} />
    );
  }
}

SafeView.propTypes = {
  gradient: PropTypes.bool,
  children: PropTypes.any.isRequired,
  bottom: PropTypes.shape({}),
};
