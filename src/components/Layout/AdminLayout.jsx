import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet, useNavigate } from "react-router-dom";

const AdminLayout = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <div className="flex h-screen bg-[#F8FAFC] text-slate-800">
      
      {/* Sidebar */}
      <div
        className={`fixed lg:static inset-y-0 left-0 z-40 transform 
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        transition-transform duration-300 ease-in-out`}
      >
        <Sidebar
          onLogout={handleLogout}
          onClose={() => setIsSidebarOpen(false)}
        />
      </div>

      {/* Overlay (Mobile) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Layout */}
      <div className="flex flex-col flex-1 min-h-screen">
        
        {/* Header */}
        <Header toggleSidebar={() => setIsSidebarOpen(true)} />

        {/* Content Area */}
        <main className="flex-1 p-6 overflow-y-auto bg-[#F8FAFC]">
          
          {/* Inner Wrapper (better spacing & consistency) */}
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>

        </main>
      </div>
    </div>
  );
};

export default AdminLayout;