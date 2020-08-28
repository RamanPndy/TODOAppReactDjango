import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoCreate from './TodoCreate';

class TODODashboard extends Component {
  render() {
    return (
      <div className='ui container'>
        <div>Create TODO</div>
        <TodoCreate />
        <TodoList />
      </div>
    );
  }
}

export default TODODashboard;