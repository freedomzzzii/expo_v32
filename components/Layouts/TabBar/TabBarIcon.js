import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './StyleTabBar';

import { Colors } from '../../../config';
import { Icons } from '../../../helpers';

export default class TabBarIcon extends Component {
  render() {
    const { focused, name } = this.props;

    return (
      <Icons
        name={name}
        size={26}
        style={styles.icon}
        color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }
}

TabBarIcon.propTypes = {
  name: PropTypes.string,
  focused: PropTypes.bool,
  source: PropTypes.any,
  style: PropTypes.shape({}),
  img: PropTypes.bool,
};
