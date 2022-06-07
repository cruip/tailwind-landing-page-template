import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LogoImage from "../images/logo-bk.png";

function Header() {
  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && "bg-white backdrop-blur-sm shadow-lg"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center font-bold text-xl gap-x-2"
              aria-label="Cruip"
            >
              <img src={LogoImage} alt="logo" width="90" height="54" />
              <h2>MashiMashi</h2>
            </Link>
          </div>

          {/* Site navigation */}
          <div class="navbar">
            <div class="justify-end w-full">
              <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
                <ul
                  tabindex="0"
                  class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <NavLink href="/platform" title="Platform" />
                  <NavLink href="/about-us" title="About us" />
                  <NavLink href="/service" title="Service" />
                  <NavLink href="/product" title="Product" />
                  <NavLink href="/contact-us" title="Contact us" />
                </ul>
              </div>
            </div>
            <div class="navbar-center hidden lg:flex">
              <ul class="menu menu-horizontal p-0">
                <NavLink href="/platform" title="Platform" />
                <NavLink href="/about-us" title="About us" />
                <NavLink href="/service" title="Service" />
                <NavLink href="/product" title="Product" />
                <NavLink href="/contact-us" title="Contact us" />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

const NavLink = ({ href, title }) => (
  <li>
    <Link
      to={href}
      className="font-bold hover:opacity-50 px-5 py-3 flex items-center transition duration-150 ease-in-out"
    >
      {title}
    </Link>
  </li>
);

export default Header;
