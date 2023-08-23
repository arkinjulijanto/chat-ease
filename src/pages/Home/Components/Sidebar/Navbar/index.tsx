import React from 'react';

function Navbar() {
  return (
    <div className="flex items-center p-4 h-[50px] justify-between text-gray-700 dark:text-gray-200">
      <img src="" alt="profile" className="h-[24px] w-[24px] rounded object-cover" />
      <button className="w-[34px] p-1 border rounded border-slate-500 bg-slate-200 dark:bg-slate-600">
        +
      </button>
    </div>
  );
}

export default Navbar;
