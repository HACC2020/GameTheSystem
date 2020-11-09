import React from 'react';
import { Input } from 'antd';

import Button from '../Button';

function Login() {
  return (
    <div className="flex justify-center w-full">
      <div className="inline-block transition-shadow duration-300 ease-in-out hover:shadow bg-white shadow-lg rounded-lg border border-solid border-gray-400 p-8">
        <h1 className="text-3xl font-bold mb-2">Schedule Appointment</h1>
        <div className="text-gray-600 mb-4">
          Create an appointment for someone needing to enter the building.
        </div>
        <Input placeholder="Email" />
        <br />
        <br />
        <Button text="Schedule" />
      </div>
    </div>
  );
}

export default Login;
