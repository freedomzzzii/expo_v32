import React, { Component } from 'react';
import { View, ScrollView, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

import styles from './StyleDynamicScrollView';

const { height } = Dimensions.get('window');

export default class DynamicScrollView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenHeight: this.handleHeight(),
    };
  }

  handleHeight = content => {
    const { backBtn, bottomNavigator, custom } = this.props;
    let screenHeight = content ? content : height;
    
    if (backBtn) {
      screenHeight += 50; //TODO: update value
    }
    if (bottomNavigator) {
      screenHeight += 65;
    }
    if (custom) {
      screenHeight += custom;
    }
    return screenHeight;
  } 

  handleContentSizeChange = (contentWidth, contentHeight) => this.setState({ screenHeight: this.handleHeight(contentHeight) });

  render() {
    const { screenHeight } = this.state;
    const { children } = this.props;
    
    return (
      <ScrollView
        style={styles.container}
        scrollEnabled={screenHeight > height}
        onContentSizeChange={this.handleContentSizeChange}
      >
        <View style={styles.content}>
          {children}
        </View>
      </ScrollView>
    );
  }
}

DynamicScrollView.propTypes = {
  children: PropTypes.any.isRequired,
  bottomNavigator: PropTypes.bool,
  backBtn: PropTypes.bool,
  custom: PropTypes.number,
};
