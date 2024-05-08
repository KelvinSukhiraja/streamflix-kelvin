import { BanknotesIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Balance, rupiah } from "../services/Wallet";

const Navbar = () => {
  const navigate = useNavigate();
  const getBalance = Balance();

  return (
    <>
      <div className="md:flex w-full justify-between place-items-center py-8 px-20 bg-black text-white hidden ">
        <h1
          onClick={() => navigate("/")}
          className="font-light text-3xl cursor-pointer brightness-90 hover:brightness-200 transition ease-in-out"
        >
          StreamFlix
        </h1>
        <div className="flex gap-5 place-items-center">
          <BanknotesIcon className="size-8 fill-white" />
          <div>{getBalance}</div>
        </div>
      </div>
      <h2
        onClick={() => navigate("/")}
        className="p-4 font-light text-xl md:hidden"
      >
        StreamFlix
      </h2>
    </>
  );
};

export default Navbar;
