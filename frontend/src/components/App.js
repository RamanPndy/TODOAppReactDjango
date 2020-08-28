import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../store';

import BucketDashboard from './BucketDashboard';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BucketDashboard />
      </Provider>
    );
  }
}