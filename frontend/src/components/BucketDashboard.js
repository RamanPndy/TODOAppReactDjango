import React, { Component } from 'react';
import BucketList from './BucketList';
import BuckerCreate from './BucketCreate';

class BucketDashboard extends Component {
  render() {
    return (
      <div className='ui container'>
        <div>Create TODO Bucket</div>
        <BuckerCreate />
        <BucketList />
      </div>
    );
  }
}

export default BucketDashboard;