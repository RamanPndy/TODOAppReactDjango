import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getTodo, editTodo } from '../actions/todos';
import TodoForm from './TodoForm';

class TodoEdit extends Component {
  componentDidMount() {
    this.props.getTodo(this.props.match.params.id);
  }

  onSubmit = formValues => {
    formValues['bucketid']= this.props.match.params.bucketid
    this.props.editTodo(this.props.match.params.bucketid, formValues);
  };

  render() {
    return (
      <div className='ui container'>
        <h2 style={{ marginTop: '2rem' }}>Edit Todo</h2>
        <TodoForm
          initialValues={this.props.todo}
          enableReinitialize={true}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  todo: state.todos[ownProps.match.params.id]
});

export default connect(mapStateToProps, { getTodo, editTodo } )(TodoEdit);