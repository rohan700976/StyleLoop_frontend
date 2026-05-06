import React, { useEffect, useState, useRef } from 'react';
import { ShoppingCart, Menu, X, Search, UserCircle, Heart, ChevronDown, LogIn, UserPlus } from "lucide-react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import navlogo from '../assets/NavbarLogo/navLogo.png';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const location = useLocation();

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

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <header 
        className={`fixed w-full top-0 z-[100] transition-all duration-300 ${
          scrolled 
            ? 'bg-white dark:bg-blue-950 shadow-md py-1 border-b border-blue-100/50 dark:border-blue-900/50' 
            : 'bg-white/95 dark:bg-blue-950/90 backdrop-blur-md py-2 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Slimmer Logo Section */}
            <Link to="/" className="flex-shrink-0 transition-transform duration-300 hover:scale-105 active:scale-95">
              <img
                src={navlogo}
                alt="StyleLoop Logo"
                className="h-8 w-auto object-contain sm:h-12 lg:h-14"
              />
            </Link>

            {/* Desktop Navigation - High Contrast Text */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  {link.submenu ? (
                    <div className="flex items-center gap-1 cursor-pointer text-gray-900 dark:text-blue-50 font-extrabold hover:text-blue-600 dark:hover:text-blue-400 transition-all py-2 tracking-tight uppercase text-[11px]">
                      {link.name}
                      <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" />
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-gray-900 dark:text-blue-50 font-extrabold hover:text-blue-600 dark:hover:text-blue-400 transition-all py-2 relative tracking-tight uppercase text-[11px] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {link.name}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {link.submenu && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 pt-3">
                      <div className="bg-white dark:bg-blue-900 rounded-2xl shadow-xl border border-blue-50 dark:border-blue-800 overflow-hidden p-2">
                        <div className="grid grid-cols-1 gap-1">
                          {link.submenu.map((sublink) => (
                            <Link
                              key={sublink.name}
                              to={sublink.href}
                              className="block px-4 py-3 text-[12px] font-bold text-gray-700 dark:text-blue-100 hover:bg-blue-50 dark:hover:bg-blue-800/60 hover:text-blue-600 dark:hover:text-blue-300 rounded-xl transition-all"
                            >
                              {sublink.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Compact Search */}
            <div className="hidden md:flex flex-1 max-w-[200px] xl:max-w-xs relative group">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-blue-500 w-3.5 h-3.5" />
              <input
                type="text"
                placeholder="Search styles..."
                className="w-full bg-blue-50/50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 pl-9 pr-4 py-2 rounded-xl text-[12px] transition-all outline-none text-gray-900 dark:text-white"
              />
            </div>

            {/* Action Group */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-800 transition-all shadow-sm"
              >
                {darkMode ? <FaSun className="w-4 h-4" /> : <FaMoon className="w-4 h-4" />}
              </button>

              <div className="relative group hidden sm:block">
                <button className="p-2 rounded-xl bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-800 transition-all shadow-sm">
                  <UserCircle className="w-5 h-5" />
                </button>
                <div className="absolute right-0 mt-0 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 pt-2">
                  <div className="bg-white dark:bg-blue-900 rounded-xl shadow-2xl border border-blue-50 dark:border-blue-800 p-1.5">
                    <Link to="/auth/login" className="flex items-center gap-2.5 px-3 py-2 text-[12px] font-bold text-gray-700 dark:text-blue-50 hover:bg-blue-50 dark:hover:bg-blue-800/60 rounded-lg transition-all">
                      <LogIn className="w-4 h-4 text-blue-500" /> LOGIN
                    </Link>
                    <Link to="/auth/signup" className="flex items-center gap-2.5 px-3 py-2 text-[12px] font-bold text-gray-700 dark:text-blue-50 hover:bg-blue-50 dark:hover:bg-blue-800/60 rounded-lg transition-all">
                      <UserPlus className="w-4 h-4 text-blue-500" /> SIGN UP
                    </Link>
                  </div>
                </div>
              </div>

              <Link to="/wishlist" className="p-2 rounded-xl bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300 hover:text-red-500 transition-all relative">
                <Heart className="w-5 h-5" />
              </Link>

              <Link to="/cart" className="p-2 md:p-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 flex items-center gap-2 group">
                <ShoppingCart className="w-5 h-5" />
                <span className="hidden xl:inline text-[11px] font-extrabold tracking-tighter text-white">CART</span>
              </Link>

              {/* Mobile Toggle - Improved BG */}
              <button 
                onClick={toggleMenu}
                className="lg:hidden p-2 rounded-xl bg-blue-600 dark:bg-blue-500 text-white shadow-md active:scale-90"
              >
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-out Drawer - Add Solid BG */}
        <div className={`fixed inset-0 z-[110] lg:hidden transition-all duration-500 ${menuOpen ? 'visible' : 'invisible'}`}>
          <div 
            className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${menuOpen ? 'opacity-100' : 'opacity-0'}`} 
            onClick={toggleMenu}
          ></div>
          
          <div className={`absolute top-0 right-0 h-full w-[280px] bg-white dark:bg-blue-950 shadow-2xl transition-transform duration-500 transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <img src={navlogo} alt="Logo" className="h-10 w-auto" />
                <button onClick={toggleMenu} className="p-2 rounded-lg bg-gray-100 dark:bg-blue-900 text-gray-500 dark:text-blue-300">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav Links Stacked */}
              <div className="flex-1 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
                {navLinks.map((link) => (
                  <div key={link.name} className="border-b border-gray-50 dark:border-blue-900/50 last:border-0 pb-1">
                    {link.submenu ? (
                      <div className="space-y-1">
                        <button 
                          onClick={() => setActiveSubmenu(activeSubmenu === link.name ? null : link.name)}
                          className={`flex items-center justify-between w-full p-4 rounded-xl transition-all ${
                            activeSubmenu === link.name ? 'bg-blue-50 dark:bg-blue-900 text-blue-600 font-bold' : 'text-gray-900 dark:text-blue-100 font-bold'
                          } uppercase tracking-tighter text-[11px]`}
                        >
                          {link.name}
                          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeSubmenu === link.name ? 'rotate-180' : ''}`} />
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${activeSubmenu === link.name ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                          <div className="pl-6 space-y-2 mt-2 border-l-2 border-blue-600/10 ml-5">
                            {link.submenu.map((sublink) => (
                              <Link
                                key={sublink.name}
                                to={sublink.href}
                                className="block p-3 text-[13px] font-bold text-gray-600 dark:text-blue-300 hover:text-blue-600 transition-colors"
                              >
                                {sublink.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={link.href}
                        className="block p-4 rounded-xl text-gray-900 dark:text-blue-100 hover:bg-blue-50 dark:hover:bg-blue-900 hover:text-blue-600 transition-all font-bold uppercase tracking-tighter text-[11px]"
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Sidebar Footer */}
            <div className="mt-auto p-6 bg-gray-50 dark:bg-blue-900/10 border-t border-gray-100 dark:border-blue-900/50">
              <div className="grid grid-cols-2 gap-3">
                <Link to="/auth/login" className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white dark:bg-blue-900 border border-gray-200 dark:border-blue-800 text-gray-900 dark:text-blue-50 text-[11px] font-bold uppercase tracking-widest shadow-sm">
                  LOGIN
                </Link>
                <Link to="/auth/signup" className="flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 text-white text-[11px] font-bold uppercase tracking-widest shadow-lg shadow-blue-600/20">
                  JOIN
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="h-16 sm:h-20"></div>
    </>
  );
}