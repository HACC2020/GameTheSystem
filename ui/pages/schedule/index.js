import Navbar from '../../components/Global/Navbar';
import Schedule from '../../components/Schedule/Schedule';

export default function Appointments() {
  return (
    <div className="body-color h-screen">
      <Navbar />
      <br />
      <main className="p-5">
        <Schedule />
      </main>
    </div>
  );
}
