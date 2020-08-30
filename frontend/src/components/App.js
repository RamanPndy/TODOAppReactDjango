import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import history from '../history';
import store from '../store';
import Header from './layout/Header';
import BucketDashboard from './BucketDashboard';
import TODODashboard from './TODODashboard';
import BucketDelete from './BucketDelete';
import TODODelete from './TODODelete';
import TodoEdit from './ToDoEdit';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Header />
          <Switch>
            <Route exact path='/' component={BucketDashboard} />
            <Route exact path='/todos/:id' component={TODODashboard} />
            <Route exact path='/delete/:id' component={BucketDelete} />
            <Route exact path='/todo/delete/:id' component={TODODelete} />
            <Route exact path='/todo/edit/:id' component={TodoEdit} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));