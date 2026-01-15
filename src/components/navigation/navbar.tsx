"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import MegaMenuButton from "./mega-menu-button";
import { SideNav } from "./sidenav";

interface NavbarProps {
    onToggleSidebar?: () => void;
}

export default function Navbar({ onToggleSidebar }: NavbarProps) {
    const [isMegaOpen, setIsMegaOpen] = useState(false);
    const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isSideNavOpen, setIsSideNavOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [isHydrated, setIsHydrated] = useState(false);
    const megaMenuRef = useRef<HTMLDivElement | null>(null) as React.RefObject<HTMLDivElement>;
    const megaTriggerRef = useRef<HTMLButtonElement>(null) as React.RefObject<HTMLButtonElement>;
    const sideNavRef = useRef<HTMLDivElement | null>(null) as React.RefObject<HTMLDivElement>;
    const hamburgerRef = useRef<HTMLButtonElement>(null) as React.RefObject<HTMLButtonElement>;

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;
            const isInsideMenu = megaMenuRef.current?.contains(target);
            const isInsideTrigger = megaTriggerRef.current?.contains(target);
            if (!isInsideMenu && !isInsideTrigger) setIsMegaOpen(false);

            const isInsideSideNav = sideNavRef.current?.contains(target);
            const isHamburgerButton = hamburgerRef.current?.contains(target);
            if (!isInsideSideNav && !isHamburgerButton && isSideNavOpen) {
                setIsSideNavOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isSideNavOpen]);


    const handleSearchSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Hook a real search handler here when available.
    };

    return (
        <nav suppressHydrationWarning className="fixed top-0 z-[9999] w-full bg-white/80 backdrop-blur-md border-b border-gray-200 md:px-4 md:py-1.5 py-2 px-1">
            <div className="px-3 py-1 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex md:gap-4 gap-0 items-center justify-start">
                        <div className="flex gap-2">
                            <button
                                ref={hamburgerRef}
                                suppressHydrationWarning
                                onClick={() => setIsSideNavOpen((open) => !open)}
                                aria-label="Toggle navigation menu"
                                type="button"
                                className="inline-flex items-center justify-center p-2 text-[#e74c3c] border-2 border-[#e74c3c] rounded-lg hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#e74c3c] focus:ring-offset-2"
                            >
                                <i className="fa fa-bars md:text-xl text-lg" aria-hidden="true"></i>
                            </button>
                            <MegaMenuButton
                                isOpen={isMegaOpen}
                                onToggle={() => setIsMegaOpen((open) => !open)}
                                menuRef={megaMenuRef}
                                triggerRef={megaTriggerRef}
                            />
                        </div>
                        <Link href="/" className="flex select-none ms-4 md:me-24">
                            <Image
                                src="/images/owasp-blt-logo.svg"
                                className="h-9 sm:h-10 md:h-10 lg:h-10 w-auto"
                                alt="OWASP BLT Logo"
                                width={50}
                                height={50}
                                priority
                            />
                        </Link>
                    </div>

                    <div className="flex-1 max-w-xl mx-4 hidden sm:block">
                        <div className="relative flex items-center rounded-lg overflow-visible bg-white border-2 border-[#e74c3c] hover:bg-red-50 transition-colors duration-200">
                            <form className="w-full flex items-center" onSubmit={handleSearchSubmit}>
                                <div className="relative w-full">
                                    <input
                                        type="text"
                                        name="query"
                                        value={query}
                                        onChange={(event) => setQuery(event.target.value)}
                                        placeholder="Search here..."
                                        autoComplete="off"
                                        className="w-full pl-12 pr-4 py-2 text-gray-700 placeholder-gray-400 bg-transparent outline-none"
                                    />
                                </div>
                            </form>
                            <i className="fa fa-search absolute left-4 text-red-500 z-10 my-auto text-lg" aria-hidden="true"></i>
                        </div>
                    </div>

                    <button
                        className="p-2 text-red-500 sm:hidden"
                        onClick={() => setIsMobileSearchOpen((open) => !open)}
                        aria-label="Toggle mobile search"
                        type="button"
                    >
                        <i className="fa fa-search text-3xl" aria-hidden="true"></i>
                    </button>

                    <div className="flex items-center gap-4">
                        <div className="hidden ml-4 md:block">
                            <button
                                suppressHydrationWarning
                                onClick={() => setIsDarkMode((value) => !value)}
                                className="relative inline-flex items-center justify-center p-2 text-[#e74c3c] border-2 border-[#e74c3c] rounded-lg hover:bg-[#e74c3c] hover:text-white w-10 h-10 transition-colors"
                                aria-label="Toggle dark mode"
                                type="button"
                            >
                                <i
                                    className={`fas fa-sun text-xl absolute transition-all duration-300 ease-in-out ${isDarkMode ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"
                                        }`}
                                ></i>
                                <i
                                    className={`fas fa-moon text-xl absolute transition-all duration-300 ease-in-out ${isDarkMode ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
                                        }`}
                                ></i>
                            </button>
                        </div>
                        <div className="hidden lg:flex justify-center items-center gap-4">
                            <Link
                                href="/accounts/signup/"
                                className="inline-flex select-none items-center justify-center px-3 py-2 text-red-500 border-2 border-red-500 rounded-lg hover:bg-red-500 hover:text-white font-medium transition-colors duration-200"
                            >
                                Signup
                            </Link>
                            <Link
                                href="/accounts/login/?next=/"
                                className="inline-flex select-none items-center justify-center px-3 py-2 text-red-500 border-2 border-red-500 rounded-lg hover:bg-red-500 hover:text-white font-medium transition-colors duration-200"
                            >
                                Login
                            </Link>
                        </div>
                        <Link href="/accounts/login/?next=/" className="block lg:hidden m-2">
                            <i className="fa fa-user text-4xl text-red-500" aria-hidden="true"></i>
                        </Link>
                    </div>
                </div>

                {isMobileSearchOpen && (
                    <div className="sm:hidden w-full px-1 pt-3">
                        <form className="flex items-center" onSubmit={handleSearchSubmit}>
                            <div className="relative flex-1">
                                <input
                                    type="text"
                                    value={query}
                                    onChange={(event) => setQuery(event.target.value)}
                                    placeholder="Search here..."
                                    className="w-full pl-10 pr-4 py-3 border-2 border-[#e74c3c] rounded-lg text-gray-700 bg-white"
                                />
                                <i className="fa fa-search absolute text-lg left-3 top-1/2 -translate-y-1/2 text-[#e74c3c]" aria-hidden="true"></i>
                            </div>
                            <button
                                type="submit"
                                className="ml-2 py-3 px-4 bg-[#e74c3c] text-white rounded-lg hover:bg-red-600 transition-colors"
                            >
                                <i className="fa fa-search text-xl" aria-hidden="true"></i>
                            </button>
                        </form>
                    </div>
                )}
            </div>
            {isHydrated && (
                <div ref={sideNavRef}>
                    <SideNav
                        isOpen={isSideNavOpen}
                        onClose={() => setIsSideNavOpen(false)}
                        isDarkMode={isDarkMode}
                    />
                </div>
            )}
        </nav>
    );
}
