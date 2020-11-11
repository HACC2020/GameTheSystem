import React from 'react';
import Navbar from '../../components/Global/Navbar';
// import Qr from '../../components/Scan/QRCode';
import dynamic from 'next/dynamic'

const Qr = dynamic(() => import('../../components/Scan/QRCode.jsx'), { ssr: false });

export default function Appointments() {
  return (
    <div className="body-color h-screen">
      <Navbar />
      <br />
      <main className="p-5">
        <div className="flex justify-center w-full">
          <div className="inline-block transition-shadow duration-300 ease-in-out hover:shadow bg-white shadow-lg rounded-lg border border-solid border-gray-400 p-8">
            <h1 className="text-3xl font-bold mb-2">Scan QR Code</h1>
            <div className="text-gray-600 mb-4">
              <Qr />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
