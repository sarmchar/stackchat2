import axios from 'axios';
import socket from '../socket';


const GET_CHANNEL = 'GET_CHANNEL';
const GET_CHANNELS = 'GET_CHANNELS';
const WRITE_CHANNEL = 'WRITE_CHANNEL';

export function getChannel(channel) {
  const action = { type: GET_CHANNEL, channel };
  return action;
}
export function getChannels(channels) {
  const action = { type: GET_CHANNELS, channels };
  return action;
}

// THUNK CREATORS

export function fetchChannels() {

  return function thunk(dispatch) {
    return axios.get('/api/channels')
      .then(res => res.data)
      .then(channels => {
        const action = getChannels(channels);
        dispatch(action);
      });
  }
}

export function postChannel(channel, history) {

  return function thunk(dispatch) {
    return axios.post('/api/channels', channel)
      .then(res => res.data)
      .then(newChannel => {
        const action = getChannel(newChannel);
        dispatch(action);
        history.push(`/channels/${newChannel.id}`);
        socket.emit('new-channel', newChannel);
      });
  }

}

export default function channelsReducer(state = [], action) {

  switch (action.type) {

    case GET_CHANNELS:
      return action.channels

    case GET_CHANNEL:
      return [...state.channels, action.channel]
    default:
      return state
  }

}