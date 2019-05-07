import React from 'react';
import { Icon } from 'expo';
import PropTypes from 'prop-types';

export default class TabBarIcon extends React.Component {
  render() {
    const { name, size, style, color } = this.props;

    return (
      <Icon.Ionicons
        name={name}
        size={size}
        style={style}
        color={ color}
      />
    );
  }
}

TabBarIcon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  style: PropTypes.shape({}),
  color: PropTypes.string,
};
