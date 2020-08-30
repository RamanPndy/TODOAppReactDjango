import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getTodosByBucket, deleteTodo } from '../actions/todos';

class TodoList extends Component {
  componentDidMount() {
    let bucketId = window.location.pathname.split("/")[2]
    this.props.getTodosByBucket(bucketId);
  }

  render() {
    return (
      <div className='ui relaxed divided list' style={{ marginTop: '2rem' }}>
        {this.props.todos.map(todo => (
          <div className='item' key={todo.id}>
            <div className='right floated content'>
              <Link
                to={`/todo/delete/${todo.id}`}
                className='small ui negative basic button'
              >
                Delete
              </Link>
            </div>
            <i className='large calendar outline middle aligned icon' />
            <div className='content'>
              <Link to={`/todo/edit/${todo.id}`} className='header'>
                {todo.task}
              </Link>
              <div className='content'>{todo.bucket}</div>
              <div className='content'>{todo.status}</div>
              <div className='description'>{todo.created_at}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: Object.values(state.todos)
});

export default connect(mapStateToProps, { getTodosByBucket, deleteTodo })(TodoList);