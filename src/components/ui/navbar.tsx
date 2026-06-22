"use client";
import React, { useState } from "react";

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
    setIsOpen(!isOpen);
    // setIsOpen((prev) => !prev);
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
            {/* <Scale className="h-6 w-6 text-gray-900" />  this requires lucid-react installation */}
            <span className="text-grey-950 text-xl font-bold tracking-tight">
              Elite Partners
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
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
