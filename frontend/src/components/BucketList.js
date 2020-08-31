import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getBuckets, deleteBucket } from '../actions/buckets';
import { toHumanReadableDateTime } from '../Utils';

class BucketList extends Component {
  componentDidMount() {
    this.props.getBuckets();
  }

  render() {
    return (
      <div className='ui relaxed divided list' style={{ marginTop: '2rem' }}>
        {this.props.buckets.map(bucket => (
          <div className='item' key={bucket.id}>
            <div className='right floated content'>
              <Link
                to={`/delete/${bucket.id}`}
                className='small ui negative basic button'
              >
                Delete
              </Link>
            </div>
            <i className='large folder middle aligned icon' />
            <div className='content'>
              <Link to={`/todos/${bucket.id}`} className='header'>
                {bucket.name}
              </Link>
              <div className='description'>Created At: {toHumanReadableDateTime(bucket.created_at)}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  buckets: Object.values(state.buckets)
});

export default connect(mapStateToProps, { getBuckets, deleteBucket })(BucketList);