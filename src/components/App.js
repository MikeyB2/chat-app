import React from 'react';
import Chatkit from '@pusher/chatkit-client';
import MessageList from './MessageList';
import SendMessageForm from './SendMessageForm';
import ChannelList from './ChannelList';
import NewChannelForm from './NewChannelForm';

import { tokenUrl, instanceLocator } from '../config';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      messages: []
    }
  }
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
              this.setState({
                messages: [...this.state.messages, message]//... spread operator to take existing messages and make them individual messages when new message is added instead of making them all 1 item
              })
            }
          }
        })
      })
  }

  render() {
    return (
      <div className="App">
        <ChannelList />
        <MessageList messages={this.state.messages} />
        <SendMessageForm />
        <NewChannelForm />
      </div>
    );
  }
}

export default App;
