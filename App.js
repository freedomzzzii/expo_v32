import React from 'react';
import { Platform, StatusBar, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './StyleApp';

import AppNavigator from './navigation/MainTabNavigator';
import { ErrorBoundary } from './helpers';

import { SENTRY_DSN } from 'react-native-dotenv';
import Sentry from 'sentry-expo';
Sentry.enableInExpoDevelopment = true; // true = enable dev mode
Sentry.config(SENTRY_DSN).install();

import configureStore from './configureStore';
const store = configureStore();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingComplete: false,
    };
  }

  _loadResourcesAsync = async () => (
    Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        ...Icon.Ionicons.font,
        'font-icon': require('./assets/fonts/Font-Icon.ttf'),
        'prompt': require('./assets/fonts/Prompt-Light.ttf'),
        'prompt-bold': require('./assets/fonts/Prompt-Medium.ttf'),
      }),
    ])
  );

  _handleLoadingError = error => {
    console.log('AppLoading>>>', error);
    Sentry.captureException(new Error(`AppLoading ${new Date().toUTCString()}>>>`, error));
  }

  _handleFinishLoading = () => this.setState({ isLoadingComplete: true });

  render() {
    const { isLoadingComplete } = this.state;
    const { skipLoadingScreen } = this.props;

    if (!isLoadingComplete && !skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    }
    
    return (
      <Provider store={store}>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {/* if you want to log error plz uncomment component ErrorBoundary */}
          {/* <ErrorBoundary> */}
          <AppNavigator />
          {/* </ErrorBoundary> */}
        </View>
      </Provider>
    );
  }
}

App.propTypes = {
  skipLoadingScreen: PropTypes.any,
};
