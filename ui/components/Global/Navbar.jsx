import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <div className="flex justify-between text-white bg-color p-4">
      <div className="flex">
        <div className="font-bold">
          <Link href="/">GameTheSystem</Link>
        </div>
        <div className="pl-8">
          <Link href="/schedule">Schedule</Link>
        </div>
        <div className="pl-8">
          <Link href="/dashboard">Dashboard</Link>
        </div>
      </div>
      <div className="flex">
        <div>
          <Link href="/appointments">
            My appointments
          </Link>
        </div>
        <div className="pl-8">
          <Link href="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
