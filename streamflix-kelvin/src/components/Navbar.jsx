import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { BanknotesIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex w-full justify-between place-items-center py-8 px-20 bg-black text-white ">
      <h1
        onClick={() => navigate("/")}
        className="font-light text-3xl cursor-pointer brightness-90 hover:brightness-200 transition ease-in-out"
      >
        StreamFlix
      </h1>
      <div className="flex gap-5 place-items-center">
        <BanknotesIcon className="size-8 fill-white" />
        <div>100,000</div>
      </div>
    </div>
  );
};

export default Navbar;
