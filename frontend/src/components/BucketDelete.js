import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from './layout/Modal';
import history from '../history';
import { getBucket, deleteBucket } from '../actions/buckets';

class BucketDelete extends Component {
  componentDidMount() {
    this.props.getBucket(this.props.match.params.id);
  }

  renderContent() {
    if (!this.props.bucket) {
      return 'Are you sure you want to delete this Bucket?';
    }
    return `Are you sure you want to delete the Bucket: ${this.props.todo.task}`;
  }

  renderActions() {
    const { id } = this.props.match.params;
    return (
      <Fragment>
        <button
          onClick={() => this.props.deleteBucket(id)}
          className='ui negative button'
        >
          Delete
        </button>
        <Link to='/' className='ui button'>
          Cancel
        </Link>
      </Fragment>
    );
  }

  render() {
    return (
      <Modal
        title='Delete Bucket'
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  bucket: state.buckets[ownProps.match.params.id]
});

export default connect(mapStateToProps,{ getBucket, deleteBucket })(BucketDelete);