import React from 'react';
import Navbar from './Components/Navbar';
import Searchbar from './Components/Searchbar';
import Chats from './Components/Chats';

function Sidebar() {
  return (
    <div className="basis-1/3 bg-slate-200 dark:bg-slate-700">
      <Navbar />
      <Searchbar />
      <Chats />
    </div>
  );
}

export default Sidebar;
