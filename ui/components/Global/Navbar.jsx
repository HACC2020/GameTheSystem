import React from 'react';
import Link from 'next/link';

function Navbar() {

  return (
    <nav className="flex items-center justify-between flex-wrap bg-color p-6">
      <div className="flex items-center flex-no-shrink text-white mr-6">
        <svg className="h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/>
        </svg>
        <span class="font-semibold text-xl tracking-tight">
          <Link href="/">GameTheSystem</Link>
        </span>
      </div>
      <div className="block lg:hidden">
        <button
            className="flex items-center px-3 py-2 border rounded text-accent-color border-accent-color hover:text-accent-color hover:teal-light">
          <svg className="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow mt-2 lg:mt-0 lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow sm: flex sm:justify-between sm:inline-block">
          <a href="/schedule"
             className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-accent-color mr-4">
            Schedule
          </a>
          <a href="/dashboard"
             className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-accent-color mr-4">
            Dashboard
          </a>
          <a href="/appointments"
             className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-accent-color">
            My Appointments
          </a>
        </div>
        <div>
          <a href="/login"
             className="transition duration-300 ease-in-out bg-accent-color hover:bg-blue-700 text-white hover:text-white font-bold py-2 px-4 rounded">Login</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
