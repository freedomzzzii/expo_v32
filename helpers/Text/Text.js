import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './StyleText';

export class BoldText extends Component {
  render() {
    return <Text {...this.props} style={{ ...this.props.style, ...styles.boldText }} />;
  }
}

BoldText.propTypes = {
  style: PropTypes.any,
};

export class NormalText extends Component {
  render() {
    return <Text {...this.props} style={{ ...this.props.style, ...styles.plainText }} />;
  }
}

NormalText.propTypes = {
  style: PropTypes.any,
};

export class Link extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Text {...this.props} style={{ ...this.props.style, ...styles.linkText }} />
      </TouchableOpacity>
    );
  }
}

Link.propTypes = {
  style: PropTypes.any,
  onPress: PropTypes.func,
};
