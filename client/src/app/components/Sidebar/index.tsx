 "use client";

import React from "react";
import { Menu } from "lucide-react";

function Sidebar() {
  return (
    <div>
        {/* {TOP LEFT} */}
      <div className="flex gap-3 justify-between md:justify-normal items-center pt-8">
        <div>logo</div>
        <h1 className="font-extrabold text-2xl">HULMA</h1>
      <button className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-nlue-100" onClick={() => {}}>
        <Menu className="w-4 h-4"></Menu>
      </button>
      </div>
        {/* {SIDEBAR ITEMS} */}
        <div className="grow mt-8">
        {/* Sidebar items go here */}
        </div>
        {/* {FOOTER} */}
        <div className="text-center tex-xs text-gray-500">
        &copy; 2026 HULMA. All rights reserved.
        </div>
    </div>
  );
}

export default Sidebar;
