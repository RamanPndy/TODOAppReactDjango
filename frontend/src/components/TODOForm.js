import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class TodoForm extends Component {
  renderField = ({ input, label, meta: { touched, error } }) => {
    return (
      <div className={`field ${touched && error ? 'error' : ''}`}>
        <label>{label}</label>
        <input {...input} autoComplete='off' />
        {touched && error && (
          <span className='ui pointing red basic label'>{error}</span>
        )}
      </div>
    );
  };

  onSubmit = formValues => {
    formValues['bucketid'] = this.props.bucketId
    if (this.props.initialValues) {
      formValues['id'] = this.props.initialValues['id']
    }
    this.props.onSubmit(formValues);
  };

  render() {
    const btnText = `${this.props.initialValues ? 'Update' : 'Add'}`;
    return (
      <div className='ui segment'>
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className='ui form error'
        >
          <Field name='task' component={this.renderField} label='Task' />
          <label>Status</label>
          <Field name="status" component="select" style={{marginTop:10, marginBottom:10, paddingBottom:10}}>
            <option value="CREATED">CREATED</option>
            <option value="INPROGRESS">INPROGRESS</option>
            <option value="COMPLETED">COMPLETED</option>
            <option value="ABANDONED">ABANDONED</option>
          </Field>
          <button className='ui primary button'>{btnText}</button>
        </form>
      </div>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.task) {
    errors.task = 'Please enter at least 1 character';
  }

  return errors;
};

export default reduxForm({form: 'todoForm', touchOnBlur: false, validate })(TodoForm);