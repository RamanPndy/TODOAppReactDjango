import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store';

import Header from './layout/Header';
import BucketDashboard from './BucketDashboard';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <BucketDashboard />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));