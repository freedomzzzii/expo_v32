import React, { Component } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './StyleInput';

import { Icon, NormalText } from '../../helpers';
import { Colors } from '../../config';

const checkBorder = key => {
  switch (key) {
    case 'NORMAL':
      return Colors.borderInput;
    case 'ACTIVE':
      return Colors.borderInput;
    case 'COMPLETE':
      return Colors.lightGreen;
    case 'ERROR':
      return Colors.red;
    default:
      return Colors.borderInput;
  }
};

export class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputState: 'NORMAL',
    };
  }

  onFocus = () => this.setState({ inputState: 'ACTIVE' });

  onBlur = () => this.setState({ inputState: 'NORMAL' });

  render() {
    const { inputState } = this.state;
    const { label, isRequire, style } = this.props;

    return (
      <View style={styles.box}>
        {
          label ?
            <View style={styles.labelBox}>
              <NormalText style={styles.label}>{label}</NormalText>
              {isRequire ? <NormalText style={styles.require}>*</NormalText> : null}
            </View>
            : null
        }
        <TextInput
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          {...this.props}
          style={{ ...style, ...styles.inputText, borderBottomColor: checkBorder(inputState) }}
        />
      </View>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string,
  isRequire: PropTypes.bool,
  style: PropTypes.shape({}),
};

export class InputPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputState: 'NORMAL',
      see: false,
    };
  }

  onFocus = () => this.setState({ inputState: 'ACTIVE' });

  onBlur = () => this.setState({ inputState: 'NORMAL' });

  handleSee = () => this.setState({ see: !this.state.see });

  render() {
    const { inputState, see } = this.state;
    const { label, isRequire } = this.props;

    return (
      <View style={styles.box}>
        {
          label ?
            <View style={styles.labelBox}>
              <NormalText style={styles.label}>{label}</NormalText>
              {isRequire ? <NormalText style={styles.require}>*</NormalText> : null}
            </View>
            : null
        }
        <View style={{ ...styles.boxInputPassword, borderBottomColor: checkBorder(inputState) }}>
          <TextInput
            onBlur={this.onBlur}
            onFocus={this.onFocus}
            textContentType="none"
            style={styles.inputPassword}
            secureTextEntry={see ? false : true}
            {...this.props}
          />
          <TouchableOpacity onPress={this.handleSee}>
            <Icon style={styles.passwordIcon} name={see ? 'eye' : 'eye-off'} size={15} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

InputPassword.propTypes = {
  label: PropTypes.string,
  isRequire: PropTypes.bool,
  style: PropTypes.shape({}),
};
