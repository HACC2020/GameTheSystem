import Navbar from '../../components/Global/Navbar';
import Login from '../../components/Login/Login';

export default function Appointments() {
  return (
    <div className="body-color h-screen">
      <Navbar />
      <br />
      <main className="p-5">
        <Login />
      </main>
    </div>
  );
}
