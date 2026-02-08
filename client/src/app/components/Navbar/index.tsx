"use client";

import React from "react";
import { Bell, Menu, Sun, Settings } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex flex-wrap justify-between items-center w-full mb-7 gap-4 md:gap-0">
      {/* Left Side */}
      <div className="flex items-center gap-3 md:gap-5">
        {/* Menu button (mobile only) */}
        <button
          className="p-3 bg-gray-100 rounded-full hover:bg-blue-100 md:hidden"
          onClick={() => {}}
        >
          <Menu className="w-5 h-5 text-gray-600" />
        </button>

        {/* Search input */}
        <div className="relative flex-1">
          <input
            type="search"
            placeholder="Start type to search groups and products"
            className="pl-10 pr-4 py-2 w-full max-w-xs md:max-w-md border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500 text-sm"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Bell className="text-gray-400" size={18} />
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3 md:gap-5">
        {/* Sun icon (desktop only) */}
        <button className="hidden md:flex p-2 rounded-full hover:bg-gray-100">
          <Sun className="text-gray-500" size={20} />
        </button>

        {/* Bell with notification badge */}
        <div className="relative hidden md:flex">
          <Bell className="cursor-pointer text-gray-500" size={20} />
          <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.35rem] py-[0.1rem] text-xs font-semibold leading-none text-red-100 bg-red-400 rounded-full">
            3
          </span>
        </div>

        <hr className="hidden md:block h-7 border-l border-gray-300 mx-3" />

        {/* User avatar and name (hidden on mobile, visible on md+) */}
        <div className="hidden md:flex items-center gap-2 cursor-pointer">
          <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center text-gray-600">
            IMG
          </div>
          <span className="font-semibold">Vincent</span>
        </div>

        {/* Settings icon (mobile only, hidden on md+) */}
        <button className="block p-2 rounded-full hover:bg-gray-100">
          <Settings className="text-gray-500" size={24} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;