import React, { Component } from 'react';
import { connect } from 'react-redux';
import { writeChannel, postChannel } from '../store'

function NewChannelEntry(props) {
  return (
    <form onSubmit={props.submitChange}>
      <div className="form-group">
        <label htmlFor="name">Create a Channel</label>
        <input value={props.newChannelEntry} onChange={props.handleChange} className="form-control" type="text" name="channelName" placeholder="Enter channel name" />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-default">Create Channel</button>
      </div>
    </form>
  );
}

/** Write your `connect` component below! **/

const mapStateToProps = (state) => {
  return {
    newChannelEntry: state.newChannelEntry
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleChange(event){
      dispatch(writeChannel(event.target.value));
    },
    submitChange(event){
      event.preventDefault();
      const name = event.target.channelName.value;
      dispatch(postChannel({name}, ownProps.history));
      dispatch(writeChannel(''));
    }
  }
}

const NewChannelEntryContainer = connect(mapStateToProps, mapDispatchToProps)(NewChannelEntry);
export default NewChannelEntryContainer;
