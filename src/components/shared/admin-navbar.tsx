import { Bell } from "lucide-react";

interface AdminNavbarProps {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

const AdminNavbar: React.FC<AdminNavbarProps> = ({
  sidebarOpen,
  toggleSidebar,
}) => {
  return (
    <nav className="p-4 flex items-center justify-between bg-[#1b4571] text-white">
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="text-2xl hover:text-gray-300 transition"
        >
          ☰
        </button>
        {sidebarOpen && (
          <h2 className="text-lg font-semibold">Welcome to Admin Panel</h2>
        )}
      </div>
      <Bell className="w-5 h-5 cursor-pointer hover:text-gray-300" />
    </nav>
  );
};

export default AdminNavbar;
