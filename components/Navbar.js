import React from "react";
import Link from 'next/link';

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="w-screen relative flex flex-wrap items-center justify-center px-2 py-3 bg-orange-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-center">
          <div className="w-full relative flex justify-center lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/trial">
              <a
                className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                href="/trial"
              >
                For a limited time get a 60 day trial. Learn More!
              </a>
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}