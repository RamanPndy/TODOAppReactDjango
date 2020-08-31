import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getTodosByBucket, deleteTodo } from '../actions/todos';
import { toHumanReadableDateTime } from '../Utils';

class TodoList extends Component {
  componentDidMount() {
    let bucketId = this.getBucketID()
    this.props.getTodosByBucket(bucketId);
  }

  getBucketID = () => {
    return window.location.pathname.split("/")[2]
  }

  render() {
    let filteredTodos = this.props.todos.filter((todo) => {
      return todo["bucketid"] == this.getBucketID()
    })
    return (
      <div className='ui relaxed divided list' style={{ marginTop: '2rem' }}>
        {filteredTodos.map(todo => (
          <div className='item' key={todo.id}>
            <div className='right floated content'>
              <Link
                to={`/todo/delete/${todo.bucketid}/${todo.id}`}
                className='small ui negative basic button'
              >
                Delete
              </Link>
            </div>
            <i className='large calendar outline middle aligned icon' />
            <div className='content'>
              <Link to={`/todo/edit/${todo.bucketid}/${todo.id}`} className='header'>
                {todo.task}
              </Link>
              <div className='content'>Bucket: {todo.bucket}</div>
              <div className='content'>Status: {todo.status}</div>
              <div className='description'>Created At: {toHumanReadableDateTime(todo.created_at)}</div>
              <div className='description'>Last Modified At: {toHumanReadableDateTime(todo.last_modified_at)}</div>
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