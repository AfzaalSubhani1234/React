import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;