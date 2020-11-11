import React, { useState } from 'react';
import {
  DatePicker, Modal, Result, Input,
} from 'antd';

import Button from '../Button';
import axios from '../../api';

const { TextArea } = Input;
const { RangePicker } = DatePicker;

function Schedule() {
  const [visible, setVisible] = useState(false);
  const [success, setSuccess] = useState({
    status: 'success',
    message: 'Successfully scheduled an appointment!',
  });
  const [email, setEmail] = useState('');
  const [purpose, setPurpose] = useState('');
  const [room, setRoom] = useState('');
  const [date, setDate] = useState(null);

  const countDown = () => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 3000);
  };

  const submit = async () => {
    try {
      const info = await axios.post('/appointments/create', {
        sponsoringUserID: window.localStorage.getItem('userId'),
        startDateTime: date[0].format('YYYY-MM-DD HH:mm'),
        endDateTime: date[1].format('YYYY-MM-DD HH:mm'),
        purpose,
        appointmentRoomNumber: room,
        guestEmails: [email],
      });
      if (info.data[0].Status === '1') {
        setSuccess({
          status: 'success',
          message: 'Successfully scheduled an appointment!',
        });
      } else {
        setSuccess({
          status: 'error',
          message: info.data[0].ErrorMsg,
        });
      }
      countDown();
    } catch {
      setSuccess({
        status: 'error',
        message: 'Submission failed.',
      });
    }
  };

  return (
    <div className="flex justify-center w-full">
      <div className="inline-block transition-shadow duration-300 ease-in-out hover:shadow bg-white shadow-lg rounded-lg border border-solid border-gray-400 p-8">
        <h1 className="text-3xl font-bold mb-2">Schedule Appointment</h1>
        <div className="text-gray-600 mb-4">
          Create an appointment for someone needing to enter the building.
        </div>
        <div className="pb-1">Email</div>
        <Input onChange={(value) => setEmail(value.target.value)} placeholder="Email" />
        <div className="pt-2 pb-1">Room Number</div>
        <Input onChange={(value) => setRoom(value.target.value)} placeholder="Room #" />
        <div className="pt-2 pb-1">Purpose</div>
        <TextArea onChange={(value) => setPurpose(value.target.value)} rows={4} />
        <div className="pt-2 pb-1">Purpose</div>
        <RangePicker
          showTime={{ format: 'HH:mm' }}
          format="YYYY-MM-DD HH:mm"
          onChange={(value) => setDate(value)}
        />
        <br />
        <br />
        <Button clickEvent={submit} text="Schedule" />
        <Modal
          visible={visible}
          footer={null}
        >
          <Result
            status={success.status}
            title={success.message}
          />
        </Modal>
      </div>
    </div>
  );
}

export default Schedule;
