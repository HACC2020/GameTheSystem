import React, { useState } from 'react';
import { message, Input } from 'antd';
import { useRouter } from 'next/router';
import axios from '../../api';

import Button from '../Button';

function Login() {
  const [email, setEmail] = useState('');

  const check = async () => {
    try {
      await axios.post('/login', {
        data: {
          email,
        },
      });
      const router = useRouter();
      if (typeof window !== 'undefined') router.push('/appointments');
    } catch (error) {
      console.log(error);
      message.error('Login failed');
    }
  };

  return (
    <div className="flex justify-center w-full">
      <div className="inline-block transition-shadow duration-300 ease-in-out hover:shadow bg-white shadow-lg rounded-lg border border-solid border-gray-400 p-8">
        <h1 className="text-3xl font-bold mb-2">Login</h1>
        <div className="text-gray-600 mb-4">
          An email will be sent containing your login link.
        </div>
        <Input value={email || ''} onChange={(value) => setEmail(value.target.value)} placeholder="Email" />
        <br />
        <br />
        <Button clickEvent={check} text="Send Magic Link" />
      </div>
    </div>
  );
}

export default Login;
