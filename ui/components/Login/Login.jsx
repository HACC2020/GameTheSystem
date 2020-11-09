import React from 'react';
import { Input } from 'antd';

import Button from '../Button';

function Login() {
  return (
    <div className="flex justify-center w-full">
      <div className="inline-block transition-shadow duration-300 ease-in-out hover:shadow bg-white shadow-lg rounded-lg border border-solid border-gray-400 p-8">
        <h1 className="text-3xl font-bold mb-2">Login</h1>
        <div className="text-gray-600 mb-4">
          An email will be sent containing your login link.
        </div>
        <Input placeholder="Email" />
        <br />
        <br />
        <Button text="Send Magic Link" />
      </div>
    </div>
  );
}

export default Login;
