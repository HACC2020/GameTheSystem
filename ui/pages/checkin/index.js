import Navbar from '../../components/Global/Navbar';
import Checkin from '../../components/Checkin/Checkin';

export default function Appointments() {
  return (
    <div className="body-color h-screen">
      <Navbar />
      <br />
      <main className="p-5">
        <Checkin />
      </main>
    </div>
  );
}
