import React from 'react';
import Input from './Components/Input';

function Messages() {
  return (
    <div className="flex flex-col h-full">
      <div className="h-[calc(80%-50px)] border">01</div>
      <div className="h-[calc(20%)] border">
        <Input />
      </div>
    </div>
  );
}

export default Messages;
