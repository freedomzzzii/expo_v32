import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

import styles from './StyleNavbarBack';

import { Colors } from '../../config';
import { Icons } from '../../helpers';

class BackButton extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.box} onPress={() => this.props.navigation.goBack()}>
        <Icons fontAwesome name="chevron-left" size={20} color={Colors.white} style={styles.backIcon} />
      </TouchableOpacity>
    );
  }
}

BackButton.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }),
};

// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop
export default withNavigation(BackButton);
