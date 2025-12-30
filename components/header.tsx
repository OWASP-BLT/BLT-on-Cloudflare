import React from "react";

export default function Header() {
  return (
    <nav className="fixed top-0 z-[9999] w-full bg-white/80 backdrop-blur-md border-zinc-200 border-b md:px-4 md:py-1.5 py-2 px-1">
      <div className="px-3 py-1 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex md:gap-4 gap-0 items-center justify-start rtl:justify-end">
            <div className="flex gap-2">
              <button
                id="hamburger-button"
                type="button"
                className="inline-flex items-center justify-center p-2 text-gray-500 border-2 border-gray-300 rounded-lg hover:bg-red-500 hover:text-white text-red-500 border-red-500"
              >
                <i className="fa fa-bars md:text-xl text-lg" />
              </button>
              <button
                id="mega-menu-button"
                aria-expanded="false"
                aria-controls="mega-menu"
                className="hidden md:inline-flex group items-center gap-2 rounded-md p-2 text-gray-500 border-2 border-gray-300 hover:bg-red-500 hover:text-white text-red-500 border-red-500"
              >
                <span className="sr-only">Open menu</span>
                <i className="fa fa-th-large md:text-xl text-lg" />
              </button>
            </div>
            <a href="/" className="flex select-none ms-4 md:me-24">
              <img
                src="/img/owasp-blt-logo.svg"
                className="h-9 sm:h-10 md:h-10 lg:h-10 w-auto"
                alt="OWASP BLT Logo"
                width={50}
                height={50}
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}


