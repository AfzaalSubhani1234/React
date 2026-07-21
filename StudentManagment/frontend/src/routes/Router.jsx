import { Routes, Route } from 'react-router-dom'
import Dashboard from "../pages/Dashboard"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"

function Router() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </>
    )
}

export default Router