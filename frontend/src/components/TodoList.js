import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getTodosByBucket, deleteTodo } from '../actions/todos';

class TodoList extends Component {
  componentDidMount() {
    this.props.getTodosByBucket();
  }

  render() {
    return (
      <div className='ui relaxed divided list' style={{ marginTop: '2rem' }}>
        {this.props.todos.map(todo => (
          <div className='item' key={todo.id}>
            <div className='right floated content'>
              <Link
                to={`/delete/${todo.id}`}
                className='small ui negative basic button'
              >
                Delete
              </Link>
            </div>
            <i className='large calendar outline middle aligned icon' />
            <div className='content'>
              <Link to={`/edit/${todo.id}`} className='header'>
                {todo.task}
              </Link>
              <div className='description'>{todo.bucket}</div>
              <div className='description'>{todo.status}</div>
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