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
    { label: 'Home', href: 'Home.jsx' },
    { label: 'AWARE Campaign', href: 'AwareCampaignInfo.jsx' },
    { label: 'AWARE Campaign Video', href: 'AwareCampaignVideo.jsx' },
    { label: 'AWARE Campaign Pledge', href: 'AwareCampaignPledge.jsx' },
    { label: 'Portfolio', href: 'AwareCampaignPortfolio.jsx' }
  ];

  return (
    <header className="relative flex items-center justify-between px-[2vw] md:px-[7vw] pt-[1.5vh] pb-[0.5vh] bg-white z-50">
      {/* Abbott Logo */}
      <div className="flex-shrink-0">
        <img
          src={abbottLogo}
          alt="Abbott Logo"
          className="h-[8vh] sm:h-[9vh] md:h-[10vh] lg:h-[11vh] w-auto"
        />
      </div>

      {/* Desktop Navigation - Hidden on all screen sizes */}
      <nav className="hidden items-center space-x-[2vw]">
        {menuItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 text-body-md"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Hamburger Menu Button - Visible on all screen sizes */}
      <button
        onClick={toggleMenu}
        className="relative flex flex-col justify-center items-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 rounded bg-white"
        style={{ width: 'clamp(28px, 4vw, 36px)', height: 'clamp(28px, 3vh, 36px)', gap: 'clamp(4px, 0.5vh, 6px)' }}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span
          className={`transition-all duration-300 ease-in-out ${
            menuOpen ? 'rotate-45 translate-y-1' : ''
          }`}
          style={{width: 'clamp(24px, 3vw, 32px)', height: '3px', backgroundColor: '#0099d9'}}
        />
        <span
          className={`transition-all duration-300 ease-in-out ${
            menuOpen ? 'opacity-0' : ''
          }`}
          style={{width: 'clamp(24px, 3vw, 32px)', height: '3px', backgroundColor: '#0099d9'}}
        />
        <span
          className={`transition-all duration-300 ease-in-out ${
            menuOpen ? '-rotate-45 -translate-y-1' : ''
          }`}
          style={{width: 'clamp(24px, 3vw, 32px)', height: '3px', backgroundColor: '#0099d9'}}
        />
      </button>

      {/* Menu Overlay - Visible on all screen sizes */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={closeMenu} />
      )}

      {/* Sliding Menu - Visible on all screen sizes */}
      <nav
        ref={menuRef}
        className={`fixed top-0 right-0 h-full bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ width: 'clamp(200px, 80vw, 400px)' }}
      >
        {/* Menu Header */}
        <div className="flex justify-end px-[2vw] py-0 pt-[1.5vh]">
          {/* <div className="flex-shrink-0">
            <img
              src={abbottLogo}
              alt="Abbott Logo"
              className="h-10 w-auto"
            />
          </div> */}
          <button
            onClick={closeMenu}
            className="flex flex-col justify-center items-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 rounded bg-white"
            style={{ width: 'clamp(28px, 3.5vw, 32px)', height: 'clamp(28px, 3vh, 32px)', gap: 'clamp(2px, 0.3vh, 4px)' }}
            aria-label="Close menu"
          >
            <span className="bg-pink-800 rotate-45 translate-y-0.5" style={{width: 'clamp(20px, 2.5vw, 24px)', height: '2px'}}></span>
            <span className="bg-pink-800 -rotate-45 -translate-y-0.5" style={{width: 'clamp(20px, 2.5vw, 24px)', height: '2px'}}></span>
          </button>
        </div>

        {/* Menu Content */}
        <div className="flex-1 overflow-y-auto py-[1vh]">
          <ul className="space-y-[1vh]">
            {menuItems.map((item, index) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className={`block py-[3vh] px-[1.5vw] rounded-lg text-gray-800 hover:bg-blue-50 hover:text-blue-600 font-medium transition-all duration-200 transform ${
                    menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                  }`}
                  style={{
                    fontSize: 'clamp(14px, 2.5vw, 18px)',
                    transitionDelay: menuOpen ? `${index * 100}ms` : '0ms',
                    transitionDuration: '300ms'
                  }}
                >
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>

        
        </div>
      </nav>
    </header>
  );
}
