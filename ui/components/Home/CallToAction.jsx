import React from 'react';

function CallToAction() {
  return (
    <div className="flex">
      <div className="grid w-1/2 place-content-center">
        <h1 className="text-3xl font-bold mb-4">
          Tired of using Google Sheets
          {' '}
          <br />
          {' '}
          to track appointments?
        </h1>
        <p>
          You can now automate appointment check-ins and room movements
          <br />
          with our QR code based system.
        </p>
      </div>
      <div className="w-1/2">
        <img src="/confirmation.svg" alt="Confirmation" />
      </div>
    </div>
  );
}

export default CallToAction;
