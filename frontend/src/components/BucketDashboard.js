import React, { Component } from 'react';
import BucketList from './BucketList';

class BucketDashboard extends Component {
  render() {
    return (
      <div className='ui container'>
        <div>Create TODO Bucket</div>
        <BucketList />
      </div>
    );
  }
}

export default BucketDashboard;