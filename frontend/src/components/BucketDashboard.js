import React, { Component } from 'react';
import BucketList from './BucketList';
import BuckerCreate from './BucketCreate';

class BucketDashboard extends Component {
  render() {
    return (
      <div className='ui container'>
        <div>Create TODO Bucket</div>
        <BuckerCreate />
        <h3>Bucket List</h3>
        <BucketList />
      </div>
    );
  }
}

export default BucketDashboard;