import React, { Component } from 'react';
import { Icon } from 'expo';
import PropTypes from 'prop-types';
import { Platform } from 'react-native';

export default class Icons extends Component {
  render() {
    const { name, size, style, color } = this.props;

    return (
      <Icon.Ionicons
        name={`${Platform.OS === 'ios' ? 'ios' : 'md'}-${name}`}
        size={size}
        style={style}
        color={ color}
      />
    );
  }
}

Icons.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  style: PropTypes.shape({}),
  color: PropTypes.string,
};
