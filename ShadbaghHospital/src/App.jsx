import { BrowserRouter } from "react-router-dom";

import Navbar from "../src/components/Navbar"
import AppRoutes from "../src/routes/AppRoutes"

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <AppRoutes />
        </BrowserRouter>
    );
}

export default App;