import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GlobalSearch } from '@/components/Layout/GlobalSearch';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const handleNavClick = (href: string) => {
    if (typeof window !== 'undefined' && location.pathname === href) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/tools', label: 'Tools' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fe6b6edb33b50467e8ccd90bf2aa55159%2F5859e3419fbd4f12932a79f1e8fbec6d?format=webp&width=800"
              alt="Tech-Hub Innovation Center"
              className="w-[116px] h-auto"
              loading="eager"
              decoding="async"
            />
          </Link>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) => `relative px-2 py-2 text-lg font-semibold transition-colors duration-300 ease-out text-black/80 hover:text-[#B22429] aria-[current=page]:text-[#032F65] after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:bg-[#B22429] after:transition-all after:duration-300 after:ease-out after:origin-left after:w-0 aria-[current=page]:after:w-full`}
                onClick={() => handleNavClick(link.href)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Search"
              onClick={() => setIsSearchOpen(true)}
              className="text-black"
            >
              <Search className="w-5 h-5" />
            </Button>
          </div>

          {/* Mobile actions */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Search"
              onClick={() => setIsSearchOpen(true)}
              className="text-black"
            >
              <Search className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-black"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className={({ isActive }) => `relative block px-4 py-3 text-lg font-semibold transition-colors duration-300 ease-out text-black/80 hover:text-[#B22429] aria-[current=page]:text-[#032F65] after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:bg-[#B22429] after:transition-all after:duration-300 after:ease-out after:origin-left after:w-0 aria-[current=page]:after:w-full`}
                  onClick={() => { handleNavClick(link.href); setIsOpen(false); }}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
      <GlobalSearch open={isSearchOpen} onOpenChange={setIsSearchOpen} />
    </nav>
  );
};
