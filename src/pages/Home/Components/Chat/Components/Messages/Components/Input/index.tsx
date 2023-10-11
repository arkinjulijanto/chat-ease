import React from 'react';

function Input() {
  return (
    <div className="h-full flex items-center justify-between text-gray-900 dark:text-white bg-slate-200 dark:bg-slate-700 ">
      <input
        type="text"
        placeholder="Type something..."
        className="w-full border-none outline-none text-gray-900 dark:text-white bg-slate-200 dark:bg-slate-700"
      />
      <div className="flex items-center">
        <button className="border-none px-1 py-2 text-gray-900 dark:text-white bg-white dark:bg-gray-800">
          Send
        </button>
      </div>
    </div>
  );
}

export default Input;
