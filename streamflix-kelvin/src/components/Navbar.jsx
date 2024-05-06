import {
  MagnifyingGlassCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/16/solid";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex w-full justify-between place-items-center py-8 px-20">
      <h1 className="text-white font-light text-3xl">StreamFlix</h1>
      <div className="flex gap-5 place-items-center">
        <MagnifyingGlassIcon className="size-8 fill-white" />
      </div>
    </div>
  );
};

export default Navbar;
