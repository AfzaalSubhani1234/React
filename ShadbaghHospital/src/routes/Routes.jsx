import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../components/Header";

import Home from "../pages/Home";
import Doctors from "../pages/Doctors";
import Patients from "../pages/Patients";
import Appointments from "../pages/Appointments";


function Routes() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/doctors" element={<Doctors />} />

        <Route path="/patients" element={<Patients />} />

        <Route path="/appointments" element={<Appointments />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routes;