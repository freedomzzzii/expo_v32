import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './StyleTabBar';

import { getItem, NormalText } from '../../../helpers';

export default class TabBarLabel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: null,
    };
  }

  async UNSAFE_componentWillMount() {
    const language = await getItem('language');
    this.setState({ language });
  }

  render() {
    const { language } = this.state;
    const { content, index, color } = this.props;
    
    if (!language || !content || !index) {
      return null;
    }
    return(
      <NormalText style={{ ...styles.label, color }}>{content[language][index]}</NormalText>
    );
  }
}

TabBarLabel.propTypes = {
  content: PropTypes.shape({
    th: PropTypes.shape({}).isRequired,
    en: PropTypes.shape({}).isRequired,
  }).isRequired,
  index: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
