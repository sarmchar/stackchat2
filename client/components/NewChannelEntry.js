import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postChannel } from '../store'

function NewChannelEntry(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="name">Create a Channel</label>
        <input value={props.newChannelEntry} className="form-control" type="text" name="channelName" placeholder="Enter channel name" />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-default">Create Channel</button>
      </div>
    </form>
  );
}

/** Write your `connect` component below! **/

mapStateToProps = (state) => {
  return {
    newChannelEntry: state.newChannelEntry
  }
}

mapDispatchToProps = (dispatch) => {
  return {
  }
}

const NewChannelEntryContainer = connect(mapStateToProps, mapDispatchToProps)(NewChannelEntry)
export default NewChannelEntryContainer;
