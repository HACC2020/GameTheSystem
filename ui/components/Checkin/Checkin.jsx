import React from 'react';

function Checkin() {
  return (
    <div className="flex justify-center w-full">
      <div className="inline-block transition-shadow duration-300 ease-in-out hover:shadow bg-white shadow-lg rounded-lg border border-solid border-gray-400 p-8">
        <h1 className="text-4xl font-bold accent-color mb-2">ITS Building</h1>
        <div className="text-gray-600 mb-4">
          Check in to your closest appointment using this QR code.
        </div>
        <div className="flex justify-center w-full">
          <img src="/qr-code.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Checkin;
