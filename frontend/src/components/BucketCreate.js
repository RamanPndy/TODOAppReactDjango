import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getBuckets, addBucket } from '../actions/buckets';
import BucketForm from './BucketForm';

class BucketCreate extends Component {
  componentDidMount() {
    this.props.getBuckets();
  }

  onSubmit = formValues => {
    this.props.addBucket(formValues);
  };

  render() {
    return (
      <div style={{ marginTop: '2rem' }}>
        <BucketForm destroyOnUnmount={false} onSubmit={this.onSubmit} existingBuckets={this.props.buckets} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  buckets: Object.values(state.buckets)
});

export default connect(mapStateToProps, { getBuckets, addBucket })(BucketCreate);