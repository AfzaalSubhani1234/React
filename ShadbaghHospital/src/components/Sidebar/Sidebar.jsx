import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
    return (
        <aside className="sidebar">
            <h2>Admin Panel</h2>

            <NavLink to="/dashboard">Dashboard</NavLink>

            <NavLink to="/patients">Patients</NavLink>

            <NavLink to="/doctors">Doctors</NavLink>

            <NavLink to="/appointments">Appointments</NavLink>
        </aside>
    );
}

export default Sidebar;