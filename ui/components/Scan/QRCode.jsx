import React from 'react';
import QrReader from 'react-qr-scanner';

function Qr() {
  const handleScan = (data) => {
    console.log(data);
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
