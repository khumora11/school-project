import { useState } from "react";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { navLink } from "../../constants";
import { Button } from "../ui/button";
import { useAuthState } from "../../store/auth-store";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import ModeToggle from "./mode-toggle";

const Navbar = () => {
  const { user, logout } = useAuthState();
  const [openDropdown, setOpenDropdown] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? 0 : index);
  };

  const handleLinkClick = () => {
    setOpenDropdown(0);
    setIsMenuOpen(false);
  };

  const handleLogout = async () => {
    await signOut(auth);
    logout();
    handleLinkClick(); // Navbarni yopish
  };

  const AuthButtons = () => (
    <>
      <ModeToggle />
      {user ? (
        <div className="flex items-center gap-4">
          <FaUser className="text-2xl text-gray-700 dark:text-white" />
          <Button
            onClick={handleLogout}
            variant="destructive" // Shunday variant bor bo'lsa
            className="py-2 px-4"
          >
            Logout
          </Button>
        </div>
      ) : (
        <Link to="/signin">
          <Button className="py-2 px-4 text-white bg-[#1b4571] hover:bg-[#2a5a94]">
            Sign In
          </Button>
        </Link>
      )}
    </>
  );

  return (
    <header className="w-full shadow-sm dark:bg-[#1b4571] dark:text-white">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <Link to="/">
          <h1 className="text-xl sm:text-3xl md:text-4xl font-bold uppercase text-[#1b4571] dark:text-white cursor-pointer">
            Zarbdor IM
          </h1>
        </Link>

        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row md:items-center absolute md:static top-16 left-0 w-full md:w-auto bg-white dark:bg-[#1b4571] px-6 md:px-0 z-20`}
        >
          <ul className="flex flex-col md:flex-row gap-4 md:gap-8 py-4 md:py-0 text-lg font-semibold">
            {navLink.map((item, index) => (
              <li key={index} className="relative group">
                {item.dropdown?.length ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="hover:text-[#1b4571] dark:hover:text-white"
                    >
                      {item.name}
                    </button>
                    <div
                      className={`${
                        openDropdown === index ? "block" : "hidden"
                      } md:group-hover:block absolute top-full left-0 bg-white dark:bg-[#1b4571] shadow-md rounded mt-2 w-48 z-30`}
                    >
                      {item.dropdown.map((ddItem, ddIndex) => (
                        <Link
                          key={ddIndex}
                          to={ddItem.route}
                          className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-[#2a5a94]"
                          onClick={handleLinkClick}
                        >
                          {ddItem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.route}
                    className="hover:text-[#1b4571] dark:hover:text-white"
                    onClick={handleLinkClick}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <AuthButtons />
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-start px-6 pb-4 bg-white dark:bg-[#1b4571] gap-4">
          <AuthButtons />
        </div>
      )}
    </header>
  );
};

export default Navbar;
