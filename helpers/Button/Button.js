import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './StyleButton';

export class PrimaryButton extends Component {
  handleStyle = () => {
    const { shape, style } = this.props;

    if (shape) {
      return ({ ...style, ...styles.container, ...styles.primaryColor, ...styles.shapeButton });
    }
    return ({ ...style, ...styles.container, ...styles.primaryColor });
  }

  render() {
    const { onPress, children } = this.props;
    
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={this.handleStyle()}>
          <Text style={{ ...styles.textStyle, ...styles.primaryText }}>
            {children}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

PrimaryButton.propTypes = {
  shape: PropTypes.bool,
  children: PropTypes.any,
  onPress: PropTypes.func,
  style: PropTypes.shape({}),
};

export class SecondaryButton extends Component {
  handleStyle = () => {
    const { shape } = this.props;

    if (shape) {
      return ({ ...styles.container, ...styles.secondaryColor, ...styles.shapeButton });
    }
    return ({ ...styles.container, ...styles.secondaryColor });
  };

  render() {
    const { onPress, children } = this.props;

    return (
      <TouchableOpacity onPress={onPress}>
        <View style={this.handleStyle()}>
          <Text style={{ ...styles.textStyle, ...styles.secondaryText }}>
            {children}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

SecondaryButton.propTypes = {
  shape: PropTypes.bool,
  children: PropTypes.any,
  onPress: PropTypes.func,
};

export class CustomButton extends Component {
  handleStyle = () => {
    const { shape, btnStyle } = this.props;

    if (shape) {
      return ({ ...styles.container, ...btnStyle, ...styles.shapeButton });
    }
    return ({ ...styles.container, ...btnStyle });
  };

  render() {
    const { onPress, children } = this.props;

    return (
      <TouchableOpacity onPress={onPress}>
        <View style={this.handleStyle()}>
          <Text style={{ ...styles.textStyle, ...styles.secondaryText }}>
            {children}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

CustomButton.propTypes = {
  shape: PropTypes.bool,
  children: PropTypes.any,
  btnStyle: PropTypes.shape({}),
  textStyle: PropTypes.shape({}),
  textColor: PropTypes.shape({}),
  onPress: PropTypes.func,
};
