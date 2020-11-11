import React from 'react';
import QrReader from 'react-qr-scanner';
import { useRouter } from 'next/router';
import { message } from 'antd';

import axios from '../../api';

function Qr() {
  const router = useRouter();
  const handleScan = async (data) => {
    if (data === 'http://localhost:3000/checkin') {
      axios.post('/checkin', {
        GuestID: Number(window.localStorage.getItem('userId')),
      });

      message.success('Successfully checked in!');

      setTimeout(() => {
        if (typeof window !== 'undefined') router.push('/appointments');
      }, 3000);
    }
  };

  const handleError = (err) => {
    console.log(err);
  };

  const previewStyle = {
    height: 240,
    width: 320,
  };

  return (
    <QrReader
      delay={3000}
      style={previewStyle}
      onError={handleError}
      onScan={handleScan}
    />
  );
}

export default Qr;
