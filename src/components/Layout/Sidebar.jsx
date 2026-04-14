import { useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logo_icon from "../../assets/cetrak-logo.png";
import { X, LogOut } from "lucide-react";
import {
  LayoutDashboard,
  Users,
  Building2,
  Briefcase,
  Package,
  QrCode,
  MapPin,
  BookOpen,
  BadgePercent,
  Coins,
  Newspaper,
  TicketCheck,
  Megaphone,
  Settings,
} from "lucide-react";

const Sidebar = ({ onLogout, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("user"));
  const role = user?.role || user?.user?.role || "Guest";

  const allMenuItems = [
    {
      section: "MAIN",
      items: [{ name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" }],
    },
    {
      section: "USERS",
      items: [
        { name: "Users", icon: Building2, path: "/factoryUsers" },
        { name: "Customers", icon: Users, path: "/customers" },
        { name: "Dealers", icon: Briefcase, path: "/dealers" },
      ],
    },
    {
      section: "PRODUCT",
      items: [
        { name: "Products", icon: Package, path: "/products" },
        { name: "QR Generation", icon: QrCode, path: "/qr" },
        { name: "QR Track", icon: MapPin, path: "/track" },
        { name: "Catalogue", icon: BookOpen, path: "/catalogue" },
        { name: "Promotions", icon: BadgePercent, path: "/promotions" },
        { name: "Redemption", icon: Coins, path: "/redemption" },
      ],
    },
    {
      section: "SYSTEM",
      items: [
        { name: "Feed", icon: Newspaper, path: "/feed" },
        { name: "Tickets", icon: TicketCheck, path: "/tickets" },
        { name: "Announcements", icon: Megaphone, path: "/announcements" },
        { name: "Settings", icon: Settings, path: "/settings" },
      ],
    },
  ];

  const rolePermissions = {
    Admin: ["*"],
    "Super Admin": ["*"],
    "QR Generate": ["Dealers", "Products", "QR Generation"],
  };

  const allowed = rolePermissions[role] || [];

  let filteredMenu = allMenuItems
    .map((menu) => ({
      ...menu,
      items: menu.items.filter(
        (item) => allowed.includes("*") || allowed.includes(item.name)
      ),
    }))
    .filter((menu) => menu.items.length > 0);

  if (filteredMenu.length === 0) {
    filteredMenu = allMenuItems;
  }

  useEffect(() => {
    if (role === "QR Generate" && location.pathname === "/dashboard") {
      navigate("/qr", { replace: true });
    }
  }, [role, navigate, location.pathname]);

  return (
    <aside className="w-64 h-full flex flex-col text-white 
    bg-gradient-to-b from-[#8B3DFF] via-[#5A6BFF] to-[#00C4CC] shadow-xl">

      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <img src={logo_icon} alt="logo" className="w-9 h-9 rounded-md" />
          <h2 className="text-sm font-semibold tracking-wide">
            CETRAK
          </h2>
        </div>

        <button
          onClick={onClose}
          className="lg:hidden p-1 hover:bg-white/10 rounded-md transition"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Menu */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6 custom-scrollbar">
        {filteredMenu.map((menu, idx) => (
          <div key={idx}>
            <h3 className="text-xs text-white/70 uppercase mb-2 pl-3 tracking-wider">
              {menu.section}
            </h3>

            <ul className="space-y-1">
              {menu.items.map((item, i) => (
                <li key={i}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200
                      ${
                        isActive
                          ? "bg-white/20 backdrop-blur-md text-white shadow-lg"
                          : "text-white/80 hover:bg-white/10 hover:text-white"
                      }`
                    }
                  >
                    <item.icon className="w-5 h-5 opacity-90" />
                    <span>{item.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Logout */}
      <div className="p-4 border-t border-white/10">
        <button
          onClick={onLogout}
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg 
          bg-white/20 hover:bg-white/30 text-white transition duration-200 backdrop-blur-md"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;