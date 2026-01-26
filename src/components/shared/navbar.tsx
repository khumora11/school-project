import { useState } from "react";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import { Link, useParams, useLocation } from "react-router-dom";
import { navLink } from "../../constants";
import { Button } from "../ui/button";
import { useAuthState } from "../../store/auth-store";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import ModeToggle from "./mode-toggle";
import { useTranslation } from "react-i18next";
import LanguageDropdown from "./language-menu";

const Navbar = () => {
  const { user, logout } = useAuthState();
  const { t } = useTranslation();

  const { lng } = useParams();
  const location = useLocation();

  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currentLang = lng || "uz";

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleLinkClick = () => {
    setOpenDropdown(null);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLogout = async () => {
    await signOut(auth);
    logout();
    handleLinkClick();
  };

  const AuthButtons = () => (
    <>
      <LanguageDropdown />
      <ModeToggle />

      {user ? (
        <div className="flex items-center gap-3">
          <FaUser className="text-xl text-gray-700 dark:text-white" />
          <Button onClick={handleLogout} variant="destructive" className="px-4">
            Logout
          </Button>
        </div>
      ) : (
        <Link to={`/${currentLang}/signin`} onClick={handleLinkClick}>
          <Button className="px-4 text-white bg-[#1b4571] hover:bg-[#2a5a94]">
            Sign In
          </Button>
        </Link>
      )}
    </>
  );

  return (
    <header className="fixed top-0 w-full z-50 h-16 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-4">
        {/* Logo */}
        <Link
          to={`/${currentLang}`}
          className="flex items-center gap-2 hover:scale-105 transition-transform"
          onClick={handleLinkClick}
        >
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[#1b4571] to-[#2a5a94] dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
            Zarbdor IM
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLink.map((item, index) => (
            <div key={index} className="relative group">
              {item.dropdown?.length ? (
                <>
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="px-3 py-2 rounded-md font-medium text-gray-700 dark:text-gray-200 hover:text-[#1b4571] dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    {t(item.name)}
                  </button>

                  <div
                    className={`${
                      openDropdown === index ? "block" : "hidden"
                    } group-hover:block absolute top-full left-0 bg-white dark:bg-gray-800 shadow-lg rounded-md mt-1 w-48 z-50 border border-gray-200 dark:border-gray-700`}
                  >
                    {item.dropdown.map((ddItem, ddIndex) => {
                      const path = `/${currentLang}${ddItem.route}`;
                      const isActive = location.pathname === path;

                      return (
                        <Link
                          key={ddIndex}
                          to={path}
                          className={`block px-4 py-2 text-sm transition-colors
                            ${
                              isActive
                                ? "bg-[#1b4571] text-white dark:bg-blue-600"
                                : "text-gray-700 dark:text-gray-200 hover:bg-[#1b4571] hover:text-white dark:hover:bg-blue-600"
                            }
                            first:rounded-t-md last:rounded-b-md
                          `}
                          onClick={handleLinkClick}
                        >
                          {t(ddItem.name)}
                        </Link>
                      );
                    })}
                  </div>
                </>
              ) : (
                (() => {
                  const path = `/${currentLang}${item.route}`;
                  const isActive = location.pathname === path;

                  return (
                    <Link
                      to={path}
                      className={`px-3 py-2 rounded-md font-medium transition-colors
                        ${
                          isActive
                            ? "bg-[#1b4571] text-white dark:bg-blue-600"
                            : "text-gray-700 dark:text-gray-200 hover:text-[#1b4571] dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                        }
                      `}
                      onClick={handleLinkClick}
                    >
                      {t(item.name)}
                    </Link>
                  );
                })()
              )}
            </div>
          ))}
        </nav>

        {/* Right side controls */}
        <div className="hidden md:flex items-center gap-3">
          <AuthButtons />
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <FaTimes className="text-xl" />
          ) : (
            <FaBars className="text-xl" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-lg">
          <div className="px-4 py-4">
            {/* Mobile top controls */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <LanguageDropdown />
              <ModeToggle />
            </div>

            {/* Mobile Navigation */}
            <nav className="space-y-2">
              {navLink.map((item, index) => (
                <div key={index}>
                  {item.dropdown?.length ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(index)}
                        className="w-full px-4 py-3 text-left rounded-md font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-between"
                      >
                        {t(item.name)}
                        <span
                          className={`transform transition-transform ${
                            openDropdown === index ? "rotate-180" : ""
                          }`}
                        >
                          ▼
                        </span>
                      </button>

                      <div
                        className={`${
                          openDropdown === index ? "block" : "hidden"
                        } pl-6 mt-1 space-y-1`}
                      >
                        {item.dropdown.map((ddItem, ddIndex) => {
                          const path = `/${currentLang}${ddItem.route}`;
                          const isActive = location.pathname === path;

                          return (
                            <Link
                              key={ddIndex}
                              to={path}
                              className={`block px-4 py-2 rounded-md text-sm
                                ${
                                  isActive
                                    ? "bg-[#1b4571] text-white dark:bg-blue-600"
                                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                                }
                              `}
                              onClick={handleLinkClick}
                            >
                              {t(ddItem.name)}
                            </Link>
                          );
                        })}
                      </div>
                    </>
                  ) : (
                    (() => {
                      const path = `/${currentLang}${item.route}`;
                      const isActive = location.pathname === path;

                      return (
                        <Link
                          to={path}
                          className={`block px-4 py-3 rounded-md font-medium
                            ${
                              isActive
                                ? "bg-[#1b4571] text-white dark:bg-blue-600"
                                : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                            }
                          `}
                          onClick={handleLinkClick}
                        >
                          {t(item.name)}
                        </Link>
                      );
                    })()
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Auth */}
            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
              {user ? (
                <div className="flex flex-col gap-2">
                  <Button variant="destructive" onClick={handleLogout}>
                    Logout
                  </Button>
                </div>
              ) : (
                <Link to={`/${currentLang}/signin`} onClick={handleLinkClick}>
                  <Button className="w-full bg-[#1b4571] hover:bg-[#2a5a94] text-white">
                    Sign In
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
