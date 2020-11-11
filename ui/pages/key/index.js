import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../components/Global/Navbar';
import axios from '../../api';

export default function Appointments() {
  const router = useRouter();

  const getUser = async () => {
    const { data } = await axios.post('/user', {
      data: {
        api_token: window.localStorage.getItem('token'),
      },
    });

    const json = JSON.parse(data);
    window.localStorage.setItem('userId', json.id);
  };

  useEffect(() => {
    if (router.query.token) {
      window.localStorage.setItem('token', router.query.token);

      getUser();

      setTimeout(() => {
        if (typeof window !== 'undefined') router.push('/appointments');
      }, 2000);
    }
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
