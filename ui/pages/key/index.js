import React, { useEffect } from 'react';
import Navbar from '../../components/Global/Navbar';
import { useRouter } from 'next/router'

export default function Appointments() {
  const router = useRouter();

  useEffect(() => {
    window.localStorage.setItem('token', router.query.token);
  }, [router]);

  return (
    <div className="body-color h-screen">
      <Navbar />
      <br />
      <main className="p-5">
      <div className="flex justify-center w-full">
        <div className="inline-block transition-shadow duration-300 ease-in-out hover:shadow bg-white shadow-lg rounded-lg border border-solid border-gray-400 p-8">
          <h1 className="text-3xl font-bold mb-2">Logged in successfully.</h1>
          <div className="text-gray-600 mb-4">
            Redirecting to your appointments.
            <br />
            {router.query.token}
          </div>
        </div>
      </div>
      </main>
    </div>
  );
}
