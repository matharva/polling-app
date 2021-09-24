import React, { useEffect } from "react";

const LandingNavbar = () => {
  return (
    <div>
      <nav id="header" class="fixed w-full z-30 top-0 text-white bg-white">
        <div
          id="navAction"
          class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2"
        >
          <div class="pl-4 flex items-center">
            <a
              class="toggleColour text-black no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
              LAHI Herald
            </a>
          </div>
          <div class="block lg:hidden pr-4">
            <button
              id="nav-toggle"
              class="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            >
              <svg
                class="fill-current h-6 w-6"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
            id="nav-content"
          >
            <ul class="list-reset lg:flex justify-end flex-1 items-center">
              <li class="mr-3">
                <a
                  class="inline-block py-2 px-4 text-black font-bold no-underline"
                  onClick="document.getElementById('AboutUs').scrollIntoView();"
                >
                  About Us
                </a>
              </li>
              <li class="mr-3">
                <a
                  class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                  onClick="document.getElementById('HelpDesk').scrollIntoView();"
                >
                  FAQs
                </a>
              </li>
              <li class="mr-3">
                <a
                  class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                  onClick="document.getElementById('ContactUs').scrollIntoView();"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
      </nav>
    </div>
  );
};

export default LandingNavbar;
