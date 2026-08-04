import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      style={{
        background: "#1976d2",
        padding: "20px",
        color: "white",
      }}
    >
      <h1>🏥 Hospital Management System</h1>

      <nav
        style={{
          marginTop: "15px",
          display: "flex",
          gap: "20px",
        }}
      >
        <Link to="/">Home</Link>

        <Link to="/doctors">Doctors</Link>

        <Link to="/patients">Patients</Link>

        <Link to="/appointments">Appointments</Link>
      </nav>
    </header>
  );
}

export default Header;