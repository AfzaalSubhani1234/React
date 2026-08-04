import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <h2>
                    🏥 <span>HealthCare</span>
                </h2>
            </div>

            <div className="nav-links">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "active-link" : ""
                    }
                >
                    Home
                </NavLink>

                <NavLink
                    to="/doctors"
                    className={({ isActive }) =>
                        isActive ? "active-link" : ""
                    }
                >
                    Doctors
                </NavLink>

                <NavLink
                    to="/patients"
                    className={({ isActive }) =>
                        isActive ? "active-link" : ""
                    }
                >
                    Patients
                </NavLink>

                <NavLink
                    to="/appointments"
                    className={({ isActive }) =>
                        isActive ? "active-link" : ""
                    }
                >
                    Appointments
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;