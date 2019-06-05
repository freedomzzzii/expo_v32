import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './StyleNavbarBack';

import { BoldText } from '../../helpers';
import BackButton from './BackButton';

export default class NavbarBack extends Component {
  handleLayout = () => (
    <View style={styles.container}>
      {this.props.isShowBackBtn ? <BackButton onRef={elem => this.backButton = elem} /> : null}
      {this.props.title ? <BoldText style={styles.title}>{this.props.title}</BoldText> : null}
    </View>
  );

  render() {
    const { isShowBackground } = this.props;

    if (isShowBackground) {
      return (
        <View style={styles.boxContainerWithBG}>
          {this.handleLayout()}
        </View>
      );
    }
    return (
      <View style={styles.boxContainer}>
        {this.handleLayout()}
      </View>
    );
  }
}

NavbarBack.propTypes = {
  title: PropTypes.string,
  isShowBackBtn: PropTypes.bool,
  isShowBackground: PropTypes.bool,
};
