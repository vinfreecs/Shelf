import React from "react";

function Navbar() {
  return (
    <nav className="group fixed h-[100vh] w-16 bg-black hover:w-48 transition-all duration-600 hover:inline ">
      <ul className="flex flex-col items-center m-0 list-none h-full pr-4">
        <li className="w-full">
          <a
            href="/"
            className="flex items-center h-20 text-white hover:filter hover:grayscale-100 hover:opacity-70 transition duration-500 text-primary no-underline"
          >
            
            <svg
              className="fill-slate-600 w-8 min-w-[2rem] mx-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path d="M0 241.1C0 161 65 96 145.1 96c38.5 0 75.4 15.3 102.6 42.5L320 210.7l72.2-72.2C419.5 111.3 456.4 96 494.9 96C575 96 640 161 640 241.1v29.7C640 351 575 416 494.9 416c-38.5 0-75.4-15.3-102.6-42.5L320 301.3l-72.2 72.2C220.5 400.7 183.6 416 145.1 416C65 416 0 351 0 270.9V241.1zM274.7 256l-72.2-72.2c-15.2-15.2-35.9-23.8-57.4-23.8C100.3 160 64 196.3 64 241.1v29.7c0 44.8 36.3 81.1 81.1 81.1c21.5 0 42.2-8.5 57.4-23.8L274.7 256zm90.5 0l72.2 72.2c15.2 15.2 35.9 23.8 57.4 23.8c44.8 0 81.1-36.3 81.1-81.1V241.1c0-44.8-36.3-81.1-81.1-81.1c-21.5 0-42.2 8.5-57.4 23.8L365.3 256z" />
            </svg>
            <span className="hidden group-hover:inline ml-4">SHELF</span>
          </a>
        </li>
        <li className="w-full">
          <a
            href="/"
            className="flex items-center h-20 text-white hover:filter hover:grayscale-100 hover:opacity-70 transition duration-500 text-primary no-underline"
          >
            
            <svg
              className="fill-slate-600 w-8 min-w-[2rem] mx-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z" />
            </svg>
            <span className="hidden group-hover:inline ml-4">Books</span>
          </a>
        </li>
        {/* <li className="w-full">
          <a
            href="/read"
            className="flex items-center h-20 text-white hover:filter hover:grayscale-100 hover:opacity-70 transition duration-500 text-primary no-underline"
          >
            
            <svg
              className="fill-slate-700 w-8 min-w-[2rem] mx-6 "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
            <span className="hidden group-hover:inline ml-4">Read</span>
          </a>
        </li>
        <li className="w-full">
          <a
            href="/list"
            className="flex items-center h-20 text-white hover:filter hover:grayscale-100 hover:opacity-70 transition duration-500 text-primary no-underline"
          >
            
            <svg
              className="fill-slate-700 w-8 min-w-[2rem] mx-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM64 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />
            </svg>
            <span className="hidden group-hover:inline ml-4">ToRead</span>
          </a>
  </li>*/}
        <li className="w-full mt-auto">
          <a
            href="/list"
            className="flex items-center h-20 text-white hover:filter hover:grayscale-100 hover:opacity-70 transition duration-500 text-primary no-underline"
          >
            
            <svg
              className="fill-slate-600 w-8 min-w-[2rem] mx-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M403.8 34.4c12-5 25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160H352c-10.1 0-19.6 4.7-25.6 12.8L284 229.3 244 176l31.2-41.6C293.3 110.2 321.8 96 352 96h32V64c0-12.9 7.8-24.6 19.8-29.6zM164 282.7L204 336l-31.2 41.6C154.7 401.8 126.2 416 96 416H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96c10.1 0 19.6-4.7 25.6-12.8L164 282.7zm274.6 188c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V416H352c-30.2 0-58.7-14.2-76.8-38.4L121.6 172.8c-6-8.1-15.5-12.8-25.6-12.8H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96c30.2 0 58.7 14.2 76.8 38.4L326.4 339.2c6 8.1 15.5 12.8 25.6 12.8h32V320c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64z" />
            </svg>
            <span className="hidden group-hover:inline ml-4 font-bold">Themify</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
