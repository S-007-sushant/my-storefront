"use client";
import React, { useState } from "react";
import { Menu, X, Scale } from "lucide-react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

// Reusable link component for clearer coede
const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <a
    href="{href}"
    className="text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600 md:text-base"
  >
    {children}
  </a>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = (): void => {
    console.log("after", isOpen);
    setIsOpen(!isOpen);
    // setIsOpen((prev) => !prev);
    console.log("after", isOpen);
  };
  const navLinks = [
    { name: "About Us", href: "#about" },
    { name: "Practice Area", href: "#services" },
    { name: "Attorneys", href: "#teams" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="border-grey-100 sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* logo section of the company */}
          <div className="flex flex-shrink-0 items-center gap-2">
            {/* this requires lucid-react installation */}
            <Scale className="h-6 w-6 text-gray-900" />
            <span className="text-grey-950 text-xl font-bold tracking-tight">
              Elite Partners and Associates
            </span>
          </div>
          {/* Desktop Navigation Links */}
          <div className="hidden items-center space-x-8 lg:flex">
            {navLinks.map((link) => (
              <NavLink key={link.name} href={link.href}>
                {link.name}
              </NavLink>
            ))}
          </div>
          {/* Call to action button */}
          <div className="hidden lg:block">
            <a
              href="#Consultation"
              className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-700 md:text-base"
            >
              Consulation
            </a>
          </div>
          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="cursor-pointer p-2 text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="space-y-3 border-t border-gray-100 bg-white px-4 pt-2 pb-4 shadow-lg lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block py-2 text-base font-medium text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="border-t border-gray-100 pt-2">
            <a
              href="#consultation"
              className="block w-full rounded-lg bg-blue-600 px-6 py-3 text-center font-semibold text-white transition-colors duration-200 hover:bg-blue-700"
              onClick={() => setIsOpen(false)}
            >
              Consultation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
