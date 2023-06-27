import React from 'react';
import Google from '../../assets/images/icon-login-gmail@2x.png';

function Login() {
  return (
    <div className="h-screen flex">
      <div className="w-full max-w-sm m-auto p-10 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
          Welcome
        </h5>
        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
          Please login using your google account.
        </p>
        <ul className="mt-10 mb-4 space-y-3">
          <li>
            <a
              href="/login"
              className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
            >
              <img className="h-6" src={Google} alt="google logo" />
              <span className="flex-1 ml-3 whitespace-nowrap">Login with Google</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Login;
