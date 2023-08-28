import React from 'react';

function Chat() {
  return (
    <div className="p-2 flex items-center gap-2 cursor-pointer hover:bg-slate-300 hover:dark:bg-slate-600">
      <img
        src="https://images.pexels.com/photos/17754676/pexels-photo-17754676/free-photo-of-model-posing-on-tree-in-black-dress.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
        alt="profile"
        className="h-[40px] w-[40px] rounded object-cover"
      />
      <div className="flex flex-col">
        <h3 className="text-gray-900 dark:text-white">John</h3>
        <p className="text-xs text-gray-600 dark:text-gray-300">okay thank you</p>
      </div>
    </div>
  );
}

export default Chat;
