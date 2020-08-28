import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTodos } from '../actions/todos';

class TodoList extends Component {
  componentDidMount() {
    this.props.getTodos();
  }

  render() {
    return (
      <div className='ui relaxed divided list' style={{ marginTop: '2rem' }}>
        {this.props.todos.map(todo => (
          <div className='item' key={todo.id}>
            <i className='large calendar outline middle aligned icon' />
            <div className='content'>
              <a className='header'>{todo.task}</a>
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

export default connect(mapStateToProps, { getTodos })(TodoList);