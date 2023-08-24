import React from 'react';

function Navbar() {
  return (
    <div className="flex items-center p-4 h-[50px] justify-between text-gray-700 dark:text-gray-200">
      <img src="" alt="profile" className="h-[24px] w-[24px] rounded object-cover" />
      <div className="flex gap-2">
        <button className="w-[34px] p-1 border rounded border-slate-500 bg-slate-200 dark:bg-slate-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>
        <button className="w-[34px] p-1 border rounded border-slate-500 bg-slate-200 dark:bg-slate-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
