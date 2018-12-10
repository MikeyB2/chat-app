import React from 'react';
import Chatkit from '@pusher/chatkit-client';
import MessageList from './MessageList';
import SendMessageForm from './SendMessageForm';
import ChannelList from './ChannelList';
import NewChannelForm from './NewChannelForm';

import { tokenUrl, instanceLocator } from '../config';

class App extends React.Component {
  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      userId: 'tester',
      tokenProvider: new Chatkit.TokenProvider({
        url: tokenUrl
      })
    })
    chatManager.connect()
      .then(currentUser => {
        currentUser.subscribeToRoom({
          roomId: '19375563',
          hooks: {
            onNewMessage: message => {
              console.log('message.text: ', message.text);
            }
          }
        })
      })
  }

  render() {
    return (
      <div className="App">
        <ChannelList />
        <MessageList />
        <SendMessageForm />
        <NewChannelForm />
      </div>
    );
  }
}

export default App;
