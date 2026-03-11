import { useState, useEffect, useRef } from 'react';
import abbottLogo from '../assets/images/abbot-logo.png';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [menuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const menuItems = [
    { label: 'Home', href: '#' },
    { label: 'About AMR', href: '#about' },
    { label: 'Statistics', href: '#stats' },
    { label: 'Resources', href: '#resources' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header className="relative flex items-center justify-between px-4 md:px-20 pt-4 pb-1 bg-white z-50">
      {/* Abbott Logo */}
      <div className="flex-shrink-0">
        <img
          src={abbottLogo}
          alt="Abbott Logo"
          className="h-24 md:h-18 w-auto"
        />
      </div>

      {/* Desktop Navigation - Hidden on all screen sizes */}
      <nav className="hidden items-center space-x-8">
        {menuItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Hamburger Menu Button - Visible on all screen sizes */}
      <button
        onClick={toggleMenu}
        className="relative flex flex-col gap-1.5 w-8 h-8 justify-center items-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 rounded bg-white"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span
        style={{backgroundColor: '#0099d9'}}
          className={`w-8 h-[3px] transition-all duration-300 ease-in-out ${
            menuOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        />
        <span
        style={{backgroundColor: '#0099d9'}}
          className={`w-8 h-[3px] transition-all duration-300 ease-in-out ${
            menuOpen ? 'opacity-0' : ''
          }`}
        />
        <span
        style={{backgroundColor: '#0099d9'}}
          className={`w-8 h-[3px] transition-all duration-300 ease-in-out ${
            menuOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        />
      </button>

      {/* Menu Overlay - Visible on all screen sizes */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={closeMenu} />
      )}

      {/* Sliding Menu - Visible on all screen sizes */}
      <nav
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Menu Header */}
        <div className="flex justify-end px-6 py-0 pt-2.5">
          {/* <div className="flex-shrink-0">
            <img
              src={abbottLogo}
              alt="Abbott Logo"
              className="h-10 w-auto"
            />
          </div> */}
          <button
            onClick={closeMenu}
            className="flex flex-col gap-1.5 w-8 h-8 justify-center items-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 rounded bg-white"
            aria-label="Close menu"
          >
            <span className="w-6 h-0.5 bg-pink-800 rotate-45 translate-y-[2px]"></span>
            <span className="w-6 h-0.5 bg-pink-800 -rotate-45 -translate-y-1.5"></span>
          </button>
        </div>

        {/* Menu Content */}
        <div className="flex-1 overflow-y-auto py-1">
          <ul className="space-y-2 px-4">
            {menuItems.map((item, index) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className={`block py-3 px-3 rounded-lg text-gray-800 hover:bg-blue-50 hover:text-blue-600 font-medium transition-all duration-200 transform ${
                    menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                  }`}
                  style={{
                    transitionDelay: menuOpen ? `${index * 100}ms` : '0ms',
                    transitionDuration: '300ms'
                  }}
                >
                  <span className="text-lg">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>

        
        </div>
      </nav>
    </header>
  );
}
