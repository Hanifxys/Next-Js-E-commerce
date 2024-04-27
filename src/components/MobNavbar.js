import React from "react";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoMenuOutline } from "react-icons/io5";
import { AiOutlineHome, AiOutlineAppstore } from "react-icons/ai";

const MobNavbar = () => {
  return (
    <div className="lg:hidden fixed bottom-8 w-full bg-white left-0 right-0 flex justify-between text-4xl py-2 px-4">
      <div className="relative">
        <IoMenuOutline />
      </div>
      <div className="relative">
        <HiOutlineShoppingBag />
        <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 translate-y-1">
          0
        </div>
      </div>
      <AiOutlineHome />
      <div className="relative">
        <FiHeart />
        <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 translate-y-1">
          0
        </div>
      </div>
      <AiOutlineAppstore />
    </div>
  );
};

export default MobNavbar;
