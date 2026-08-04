import { Routes, Route } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";

import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Doctors from "../pages/Doctors";
import Patients from "../pages/Patients";
import Appointments from "../pages/Appointments";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/dashboard"
        element={
          <DashboardLayout>
            <Dashboard />
          </DashboardLayout>
        }
      />

      <Route
        path="/patients"
        element={
          <DashboardLayout>
            <Patients />
          </DashboardLayout>
        }
      />

      <Route
        path="/doctors"
        element={
          <DashboardLayout>
            <Doctors />
          </DashboardLayout>
        }
      />

      <Route
        path="/appointments"
        element={
          <DashboardLayout>
            <Appointments />
          </DashboardLayout>
        }
      />
    </Routes>
  );
}

export default AppRoutes;