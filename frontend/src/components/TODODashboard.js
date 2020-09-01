import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoCreate from './TodoCreate';

class TODODashboard extends Component {
  state = {
    bucketid : null,
  }

  componentDidMount () {
    let bucketId = this.props.match.params.bucketid
    this.setState({bucketid: bucketId})
  }

  render() {
    return (
      <div className='ui container'>
        <div>Create TODO</div>
        <TodoCreate bucketId={this.state.bucketid} />
        <h3>TODO List</h3>
        <TodoList />
      </div>
    );
  }
}

export default TODODashboard;