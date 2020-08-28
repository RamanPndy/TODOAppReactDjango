import React, { Component } from 'react';
import TodoList from './TodoList';

class TODODashboard extends Component {
  render() {
    return (
      <div className='ui container'>
        <div>Create TODO</div>
        <TodoList />
      </div>
    );
  }
}

export default TODODashboard;