import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/20/solid';
// import { useUser } from '@auth0/nextjs-auth0';

const Navbar = () => {
    const [theme, setTheme] = useState("light");
    const router = useRouter();
    // const { user, error, isLoading } = useUser();

    const toggleTheme = () => {
        document.body.classList.toggle("dark");
        setTheme(theme === "light" ? "dark" : "light")
    }

    return (
        <header className="text-gray-600 body-font shadow-lg bg-white">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href= "/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinejoin="round" stroke-linejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg> */}
                    <span className="ml-3 text-xl font-poke">Krishna Toonz</span>
                </Link>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5 hover:text-gray-900 text-semibold">Home</a>
                    <a className="mr-5 hover:text-gray-900 text-semibold">Collections</a>
                    <a className="mr-5 hover:text-gray-900 text-semibold">Projects</a>
                    <a className="mr-5 hover:text-gray-900 text-semibold">Contact</a>
                </nav>
                <button className="inline-flex items-center bg-[#9f39ab] border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                    <Link href="/api/auth/login" legacyBehavior>
                        <a className="text-sm font-medium text-neutral-100">
                            {false ? 'Logout' : 'Login'}
                        </a>
                    </Link>
                    <svg fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
                {/* <div className="flex items-center">
                    <button
                        aria-label="Toggle Dark Mode"
                        type="button"
                        className="w-10 h-10 grid place-items-center bg-gray-200 rounded dark:bg-neutral-700"
                        onClick={toggleTheme}
                    >
                        {theme === 'dark' ? (
                            <MoonIcon className="w-4 h-4 text-neutral-800" />
                        ) : (
                            <SunIcon className="w-5 h-5 text-neutral-100" />
                        )}
                    </button>
                </div> */}
            </div>
        </header>
    );
};

export default Navbar;
