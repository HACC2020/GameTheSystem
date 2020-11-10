import Navbar from '../../components/Global/Navbar';
import Appointments from '../../components/Dashboard/Appointments';

export default function Dashboard() {
  return (
    <div className="body-color h-screen">
      <Navbar />
      <br />
      <main className="p-5">
        <h1 className="text-3xl font-bold mb-4">Checked In Appointments</h1>
        <Appointments />
        <h1 className="text-3xl font-bold mb-4 mt-4">Today's Appointments</h1>
        <Appointments />
        <h1 className="text-3xl font-bold mb-4 mt-4">Upcoming Appointments</h1>
        <Appointments />
      </main>
    </div>
  );
}
