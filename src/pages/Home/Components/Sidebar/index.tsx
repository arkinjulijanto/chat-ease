import React from 'react';
import Navbar from './Components/Navbar';
import Searchbar from './Components/Searchbar';

function Sidebar() {
  return (
    <div className="basis-1/3 bg-slate-200 dark:bg-slate-700">
      <Navbar />
      <Searchbar />
    </div>
  );
}

export default Sidebar;
