import React from 'react';
import QrReader from 'react-qr-scanner';
import { useRouter } from 'next/router';

import axios from '../../api';

function Qr() {
  const router = useRouter();
  const handleScan = async (data) => {
    if (data === 'http://localhost:3000/checkin') {
      console.log(window.localStorage.getItem('token'));
      const { d } = await axios.post('/user', {
        data: {
          api_token: window.localStorage.getItem('token'),
        },
      });
      const json = JSON.parse(d);

      axios.post('/checkin', {
        GuestID: json.id,
      });

      setTimeout(() => {
        if (typeof window !== 'undefined') router.push('/appointments');
      }, 2000);
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
      delay={100}
      style={previewStyle}
      onError={handleError}
      onScan={handleScan}
    />
  );
}

export default Qr;
