import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AdminNavbar from "../shared/admin-navbar";

const AdminCategory = () => {
 const [sidebarOpen, setSidebarOpen] = useState(true);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navigate = useNavigate();

 const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const logout = () => navigate("/");

  const handleDropdownToggle = (name: string) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <div className="flex flex-col h-screen">
      <AdminNavbar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Layout */}
      <div className="flex flex-1">
        <aside
          className={`transition-all duration-300 ease-in-out ${
            sidebarOpen ? "w-64" : "w-20"
          } bg-gray-800 text-white p-4 space-y-6 overflow-y-auto`}
        >
          <div className="text-xl font-bold text-center">
            {sidebarOpen ? "Admin" : "A"}
          </div>
          <ul className="space-y-4 text-sm">
            <li>
              <Link
                to="/dashboard"
                className="block hover:text-blue-400 transition"
              >
                Dashboard
              </Link>
            </li>

            {/* Add Card */}
            <li>
              <div
                onClick={() => handleDropdownToggle("addCard")}
                className="cursor-pointer hover:text-blue-400 transition"
              >
                AddCard
              </div>
              {openDropdown === "addCard" && (
                <ul className="ml-4 mt-2 space-y-1 text-sm">
                  <li>
                    <Link to="/addCardTeachers" className="hover:underline">
                      Teachers
                    </Link>
                  </li>
                  <li>
                    <Link to="/addCardPupils" className="hover:underline">
                      Pupils
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Delete Card */}
            <li>
              <div
                onClick={() => handleDropdownToggle("deleteCard")}
                className="cursor-pointer hover:text-blue-400 transition"
              >
                DeleteCard
              </div>
              {openDropdown === "deleteCard" && (
                <ul className="ml-4 mt-2 space-y-1 text-sm">
                  <li>
                    <Link to="/deleteCardTeachers" className="hover:underline">
                      Teachers
                    </Link>
                  </li>
                  <li>
                    <Link to="/deleteCardPupils" className="hover:underline">
                      Pupils
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* News */}
            <li>
              <div
                onClick={() => handleDropdownToggle("news")}
                className="cursor-pointer hover:text-blue-400 transition"
              >
                News
              </div>
              {openDropdown === "news" && (
                <ul className="ml-4 mt-2 space-y-1 text-sm">
                  <li>
                    <Link to="/addNews" className="hover:underline">
                      AddNews
                    </Link>
                  </li>
                  <li>
                    <Link to="/deleteNews" className="hover:underline">
                      DeleteNews
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <div
                onClick={() => handleDropdownToggle("lessons")}
                className="cursor-pointer hover:text-blue-400 transition"
              >
                LessonTable
              </div>
              {openDropdown === "lessons" && (
                <ul className="ml-4 mt-2 space-y-1 text-sm">
                  <li>
                    <Link to="/addLesson" className="hover:underline">
                      AddLesson
                    </Link>
                  </li>
                  <li>
                    <Link to="/deleteLesson" className="hover:underline">
                      DeleteLesson
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="hover:text-blue-400 transition cursor-pointer">
              Settings
            </li>

            <li
              onClick={logout}
              className="text-red-500 mt-10 hover:underline cursor-pointer"
            >
              Logout
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default AdminCategory;
