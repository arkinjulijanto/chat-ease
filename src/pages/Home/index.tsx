import React from 'react';
import Sidebar from './Components/Sidebar';
import Chat from './Components/Chat';

function Home() {
  return (
    <div className="h-screen flex items-center justify-center bg-white dark:bg-gray-800">
      <div className="h-4/5 w-4/6 flex overflow-hidden border rounded border-gray-200 dark:border-gray-700">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default Home;
