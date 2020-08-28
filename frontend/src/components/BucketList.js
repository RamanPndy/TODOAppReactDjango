import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBuckets } from '../actions/buckets';

class BucketList extends Component {
  componentDidMount() {
    this.props.getBuckets();
  }

  render() {
    return (
      <div className='ui relaxed divided list' style={{ marginTop: '2rem' }}>
        {this.props.buckets.map(bucket => (
          <div className='item' key={bucket.id}>
            <i className='large calendar outline middle aligned icon' />
            <div className='content'>
              <a className='header'>{bucket.name}</a>
              <div className='description'>{bucket.created_at}</div>
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

export default connect(mapStateToProps, { getBuckets })(BucketList);