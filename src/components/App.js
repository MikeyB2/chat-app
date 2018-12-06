import React from 'react';
import MessageList from './MessageList';
import SendMessageForm from './SendMessageForm';
import ChannelList from './ChannelList';
import NewChannelForm from './NewChannelForm';
import '../index.css';

class App extends React.Component {
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
