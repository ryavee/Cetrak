import { Menu, Bell } from "lucide-react";
import { useLocation } from "react-router-dom";

const Header = ({ toggleSidebar }) => {
  const location = useLocation();

  const getTitle = () => {
    if (location.pathname.includes("customers")) return "Customers";
    if (location.pathname.includes("campaigns")) return "Campaigns";
    return "Dashboard";
  };

  return (
    <header className="h-16 sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-6 shadow-sm">
      
      {/* Left Section */}
      <div className="flex items-center gap-3">
        <button
          className="lg:hidden text-slate-600 hover:text-[#8B3DFF] transition"
          onClick={toggleSidebar}
        >
          <Menu className="w-6 h-6" />
        </button>

        <h1 className="text-lg font-semibold text-slate-800 tracking-tight">
          {getTitle()}
        </h1>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5">
        
        {/* Notification */}
        <div className="relative group">
          <Bell className="w-5 h-5 text-slate-500 cursor-pointer transition 
          group-hover:text-[#8B3DFF]" />

          {/* Notification Dot */}
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-500 rounded-full"></span>
        </div>

        {/* Divider */}
        <div className="hidden sm:block w-px h-6 bg-slate-200"></div>

        {/* Profile */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="w-9 h-9 rounded-full border-2 border-white shadow-sm group-hover:scale-105 transition"
          />

          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-sm font-semibold text-slate-800">
              Ravi Raj
            </span>
            <span className="text-xs text-slate-500">
              Admin
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;