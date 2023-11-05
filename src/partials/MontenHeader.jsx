import React from "react";
import { Link } from "react-router-dom";
import MontenLogo from "../images/monten-logo.png";

function MontenHeader() {

  return (
    <header className="fixed w-full z-30 transition duration-300 ease-in-out border-b border-slate-500 bg-white">
      <div className="max-w-6xl px-6 md:pl-36">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link
              to="/monten"
              className="flex items-center font-bold text-xl gap-x-2"
              aria-label="Cruip"
            >
              <img src={MontenLogo} alt="logo" width="58" height="46" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}


export default MontenHeader;
