import React from 'react';

function Appointment() {
  return (
    <div className="overflow-x-auto">
      <div className="inline-block ">
        <styled jsx>
          {`
      `}
        </styled>
        <div className="transition-shadow duration-300 ease-in-out shadow-lg hover:shadow bg-white rounded-lg border border-solid border-gray-400 p-6">
          <div className="flex">
            <div className="pr-8 border-solid border-r-2 border-blue-200 ">
              <h2 className="font-bold text-2xl accent-color">Tuesday, Oct. 13</h2>
              <div className="text-gray-600 mb-2">
                11:30 - 12:50
              </div>
              <div className="text-xs text-gray-600">
                Scan the QR code at the
                <br />
                {' '}
                front desk to check in.
              </div>
            </div>
            <div className="pl-10">
              <table>
                <tr>
                  <td className="font-bold p-2 pr-10">Sponsor</td>
                  <td>Ms. Joe Mauriacen</td>
                </tr>
                <tr>
                  <td className="font-bold p-2">Room</td>
                  <td>133B</td>
                </tr>
                <tr>
                  <td className="font-bold p-2">Purpose</td>
                  <td>HPC Presentation</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
