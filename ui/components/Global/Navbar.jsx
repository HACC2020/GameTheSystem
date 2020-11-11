

import React from 'react';
import Link from 'next/link';

class Navbar extends React.Component {
  constructor(props) {
    super(props)
  }

  // BROKEN
  // toggle(id) {
  //   var element = document.getElementById(id);

  //   if (element) {
  //     var display = element.style.display;

  //     if (display == "none") {
  //       element.style.display = "block";
  //     } else {
  //       element.style.display = "none";
  //     }
  //   }
  // }

  render() {
    return (
      <nav className="flex items-center justify-between flex-wrap bg-color p-6">
        {/* LOGO */}
        <div className="flex items-center flex-no-shrink text-white mr-6">
          <span class="font-semibold text-xl tracking-tight">
            <Link href="/">GameTheSystem</Link>
          </span>
        </div>

        {/* NAVBAR TOGGLER */}
        <div className="block md:hidden">
          <button id="nav-toggler"
            className="flex items-center px-3 py-2 border bg-white rounded text-accent-color border-accent-color hover:text-accent-color hover:teal-light">
            <svg className="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        {/* NAVBAR ITEMS */}
        <div id="nav-items" className="w-full flex-grow mt-2 md:mt-0 md:flex md:items-center md:w-auto hidden md:block">
          <div className="block md:inline-block text-sm md:flex-grow sm:justify-between">
            <a href="/schedule"
              className="block md:inline-block mt-4 md:mt-0 text-white hover:bg-gray-600 md:hover:text-accent-color md:hover:bg-transparent rounded md:items-end mr-4 px-4 md:px-0">
              Schedule
          </a>
            <a href="/dashboard"
              className=" block md:inline-block mt-4 md:mt-0 text-white hover:bg-gray-600 md:hover:text-accent-color md:hover:bg-transparent rounded md:items-end mr-4 px-4 md:px-0">
              Dashboard
          </a>
          <a href="/checkin"
              className=" block md:inline-block mt-4 md:mt-0 text-white hover:bg-gray-600 md:hover:text-accent-color md:hover:bg-transparent rounded md:items-end mr-4 px-4 md:px-0">
              Check-in
          </a>
          </div>
          <div className="pr-4">
            <a href="/appointments"
              className="block md:inline-block mt-4 md:mt-0 text-white hover:bg-gray-600 md:hover:text-accent-color md:hover:bg-transparent rounded md:items-end px-4 md:px-0">
              My Appointments
          </a>
          </div>
          <div className="pr-4">
            <a href="/scan"
              className="block md:inline-block mt-4 md:mt-0 text-white hover:bg-gray-600 md:hover:text-accent-color md:hover:bg-transparent rounded md:items-end px-4 md:px-0">
              Scan
          </a>
          </div>
          <hr className="mt-4 md:hidden" />
          <div className="mt-4 md:mt-0 px-4 md:px-0">
            <a href="/login"
              className="transition duration-300 mt-4 ease-in-out bg-accent-color hover:bg-blue-700 text-white hover:text-white font-bold py-2 px-4 rounded">Login</a>
          </div>
        </div>
      </nav>
    )
  }
}
export default Navbar