import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import CreatableSelect from 'react-select/lib/Creatable';
import axios from 'axios';

import API from '../API';

class BucketForm extends Component {
  state = {
    existingBuckets : [],
    bucketName : ''
  }

  componentDidMount = async() => {
    let bucketOptions = []
    await axios.get(API.BUCKETS).then(res => {
      let buckets = res.data
      buckets.forEach((bucket) => {
        bucketOptions.push({label: bucket.name, value: bucket.name})
      })
      this.setState({existingBuckets: bucketOptions})
  })
  .catch(err => alert(err.response.data))
  }

  onSubmit = formValues => {
    formValues['bucket'] = this.state.bucketName
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <div className='ui segment'>
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className='ui form error'
        >
          <div className={`field`}>
            <label>Create TODO Bucket</label>
            <CreatableSelect 
              options={this.state.existingBuckets} 
              isClearable
              onChange={opt => this.setState({bucketName: opt.value})} />
          </div>
          <button className='ui primary button'>Add</button>
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

export default reduxForm({form: 'bucketForm', touchOnBlur: false, validate })(BucketForm);