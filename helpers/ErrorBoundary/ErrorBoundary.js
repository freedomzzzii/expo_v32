import { Component } from 'react';
import PropTypes from 'prop-types';
import Sentry from 'sentry-expo';

export default class ErrorBoundary extends Component {
  static getDerivedStateFromError() {
    // if you want to handle error you can get error on function
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    // Example "componentStack":
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App
    // logComponentStackToMyService(info.componentStack);
    console.log('ErrorBoundary error>>>>', error);
    console.log('ErrorBoundary info>>>>', JSON.stringify(info));
    Sentry.captureException(new Error(`ErrorBoundary ${new Date().toUTCString()}>>>`, error));
  }

  render() {
    return this.props.children; 
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.any.isRequired,
};
