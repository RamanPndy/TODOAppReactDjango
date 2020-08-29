import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBucket } from '../actions/buckets';
import BucketForm from './BucketForm';

class BucketCreate extends Component {
  onSubmit = formValues => {
    this.props.addBucket(formValues);
  };

  render() {
    return (
      <div style={{ marginTop: '2rem' }}>
        <BucketForm destroyOnUnmount={false} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { addBucket })(BucketCreate);