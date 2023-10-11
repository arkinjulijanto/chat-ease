import React from 'react';
import ChatInfo from './Components/ChatInfo';
import Messages from './Components/Messages';

function Chat() {
  return (
    <div className="basis-2/3">
      <ChatInfo />
      <Messages />
    </div>
  );
}

export default Chat;
