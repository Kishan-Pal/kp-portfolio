import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../react.svg";

import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
  AiFillStar,
} from "react-icons/ai";
import { BsCamera } from "react-icons/bs";
import { CgFileDocument, CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  const [navColour, setNavColour] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setNavColour(window.scrollY >= 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll"); // Cleanup on unmount
    };
  }, [isMobileMenuOpen]);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { to: "/", label: "Home", icon: <AiOutlineHome /> },
    { to: "/about", label: "About", icon: <AiOutlineUser /> },
    {
      to: "/projects",
      label: "Projects",
      icon: <AiOutlineFundProjectionScreen />,
    },
    { to: "/resume", label: "Resume", icon: <CgFileDocument /> },
    { to: "/gallery", label: "Gallery", icon: <BsCamera /> },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-10 transition-colors duration-300 ${
        navColour || isMobileMenuOpen
          ? "bg-[var(--navbar-background-color)]/10 backdrop-blur-md shadow-md"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo and Hamburger */}
        <div className="flex items-center max-md:w-[100%]">
          <Link to="/">
            <div className="w-10 h-10 text-[var(--imp-text-color)] text-3xl">
              KP
            </div>
          </Link>

          {/* Mobile Hamburger */}
          <div className="md:hidden text-white ml-auto z-50">
            <button
              ref={buttonRef}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <GiHamburgerMenu size={24} />
            </button>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 items-center text-white">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`flex items-center gap-1 text-xl hover:text-[var(--navbar-text-hover-color)] ${
                isActive(link.to) ? "text-white" : "text-white"
              }`}
            >
              {link.icon} {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop GitHub buttons */}
        <div className="hidden lg:flex items-center gap-4 text-white">
          <a
            href="https://github.com/Kishan-Pal/kp-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-[var(--navbar-text-hover-color)]"
          >
            <CgGitFork /> Fork
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={menuRef}
          className="md:hidden shadow-md flex flex-col gap-4 py-4 px-6  text-white"
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center gap-2 ${
                isActive(link.to)
                  ? "text-[var(--navbar-text-hover-color)]"
                  : "text-white"
              }`}
            >
              {link.icon} {link.label}
            </Link>
          ))}

          <div className="flex gap-4 mt-2">
            <a
              href="https://github.com/Kishan-Pal/kp-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-[var(--navbar-text-hover-color)]"
            >
              <CgGitFork /> Fork
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
