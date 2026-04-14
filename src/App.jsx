import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./components/Layout/AdminLayout";

import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import Campaigns from "./pages/Campaigns";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AdminLayout />}>

          {/* Default redirect */}
          <Route path="/" element={<Navigate to="/dashboard" />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/campaigns" element={<Campaigns />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;