import Navbar from '../../components/Global/Navbar';
import Appointment from '../../components/Appointments/Appointment';

export default function Appointments() {
  return (
    <div className="body-color h-screen">
      <Navbar />
      <br />
      <main className="p-5 container mx-auto">
        <h1 className="text-3xl font-bold mb-4">My Appointments</h1>
        <Appointment />
      </main>
    </div>
  );
}
