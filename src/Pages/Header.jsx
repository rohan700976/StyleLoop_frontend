import React, { useEffect, useState } from 'react';
import { ShoppingCart, Menu, X, Search, UserCircle } from "lucide-react";
import { FaRegHeart, FaMoon, FaSun } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logoImg from '../assets/headerLogo/logo.png';
import navlogo from '../assets/NavbarLogo/navLogo.png'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const [darkMode, setDarkMode] = useState(false);

  const navLinks = [
    { name: "Home", href: "/", hover: true },
    {
      name: "Men",
      hover: true,
      submenu: [
        { name: "Tshirt", href: "/men/tshirt" },
        { name: "Shirt", href: "/men/shirt" },
        { name: "Jeans", href: "/men/jeans" },
      ],
    },
    {
      name: "Women",
      hover: true,
      submenu: [
        { name: "Lehnga", href: "/women/lehnga" },
        { name: "Kurti", href: "/women/kurti" },
        { name: "GirlJeans", href: "/women/girljeans" },
        { name: "GirlShirt", href: "/women/girlshirt" }
      ],
    },
    {
      name: "Kids",
      hover: true,
      submenu: [
        { name: "KidsTshirt", href: "/kids/kidsTshirt" },
        { name: "kidsjeans", href: "/kids/kidsJeans" },
        { name: "BoyShirt", href: "/kids/kidsShirt" },
        { name: "kidsGirlTop", href: "/kids/kidsGirTop" },
        { name: "kidsGirlScart", href: "/kids/kidsGirlSkirt" },
        { name: "KidsGirlKurti", href: "/kids/kidsGirlKurti" }
      ],
    },
  ];

  const [scrolled, setScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  // Toggle Theme
  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  return (
    <>
      <header className={`fixed w-full top-0 z-20 transition-all duration-300 
      ${scrolled ? 'bg-white dark:bg-gray-900 shadow-md' : 'bg-[rgba(255,255,250,0.9)] dark:bg-gray-900'}`}>

        <div className="max-w-7xl mx-auto px-2 sm:px-4 h-18 flex items-center justify-between">

          <Link to="/" className="flex items-center h-full overflow-visible">
            <img
              src={navlogo}
              alt="StyleLoop Logo"
              className="h-20 w-auto object-contain scale-135 py-1"
            />
          </Link>



          <div className="hidden sm:flex items-center relative mx-2 sm:mx-6 w-full sm:w-1/3 group">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full pl-10 pr-4 py-2 text-sm rounded-full shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-800 dark:bg-gray-800 dark:text-white"
            />
          </div>

          <nav className="hidden sm:flex gap-4 sm:gap-8 items-center text-indigo-600 dark:text-white text-base sm:text-lg font-medium relative">

            {navLinks.map((link) =>
              link.submenu ? (
                <div className="relative" key={link.name}>
                  <div className="peer cursor-pointer hover:text-indigo-800">
                    {link.name}
                  </div>

                  <div className="border  absolute top-full left-0 mt-2 shadow-lg rounded-md opacity-0 invisible peer-hover:visible peer-hover:opacity-100 hover:visible hover:opacity-100 transition-all duration-200 min-w-[160px] z-10">

                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.name}
                        to={sublink.href}
                        className="block px-4 py-2 text-sm dark:bg-gray-800 text-white hover:bg-white hover:text-indigo-800"
                      >
                        {sublink.name}
                      </Link>
                    ))}

                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`transition-colors duration-200 ${link.hover ? "hover:text-indigo-800 underline-offset-4" : ""}`}
                >
                  {link.name}
                </Link>
              )
            )}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="text-xl p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition"
            >
              {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
            </button>

            {/* User Profile */}
            <div className="relative group">
              <UserCircle className="w-5 sm:w-6 h-5 sm:h-6 cursor-pointer hover:text-indigo-800" />
              <div className="absolute right-0 mt-2 border bg-[rgba(255,255,250,0.9)] dark:bg-gray-800 shadow-md rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50 w-40">
                <Link to="/auth/login" className="block px-4 py-2 hover:bg-white hover:text-indigo-800 text-sm">Login</Link>
                <Link to="/auth/signup" className="block px-4 py-2 hover:bg-white hover:text-indigo-800 text-sm">Sign Up</Link>
              </div>
            </div>

            <Link to="/wishlist" className="flex flex-col items-center hover:text-indigo-800 text-sm">
              <FaRegHeart className="w-4 sm:w-5 h-4 sm:h-5" />
              <span className="font-semibold">Wishlist</span>
            </Link>

            <Link to="/cart" className="flex flex-col items-center hover:text-indigo-800 text-sm">
              <FaCartArrowDown className="w-6 sm:w-5 h-6 sm:h-5" />
              <span className="font-semibold">cart</span>
            </Link>
          </nav>

          <button onClick={toggleMenu} className="sm:hidden text-indigo-600 dark:text-white hover:text-indigo-800">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="sm:hidden bg-indigo-600 dark:bg-gray-900 text-white border-t border-gray-100 px-2 sm:px-4 py-4 space-y-3">

            {/* Theme Toggle Mobile */}
            <button
              onClick={toggleTheme}
              className="text-xl p-2 rounded-full bg-gray-200 dark:bg-gray-800"
            >
              {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
            </button>

            {/* baaki tera mobile code same hai */}
          </div>
        )}
      </header>
    </>
  );
}