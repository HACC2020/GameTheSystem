import React from 'react';

function Appointment() {
  return (
    <div className="transition-shadow duration-300 ease-in-out hover:shadow bg-white shadow-lg rounded-lg border border-solid border-gray-400 p-6">
      <table>
        <thead>
          <td />
          <td>Name</td>
          <td>Date</td>
          <td>Time</td>
          <td>Sponsor</td>
          <td>Purpose</td>
        </thead>
        <tr>
          <td>picture of person</td>
          <td>Ms. Joe Mauriacen</td>
        </tr>
      </table>
    </div>
  );
}

export default Appointment;
