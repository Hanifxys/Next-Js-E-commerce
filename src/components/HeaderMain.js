import React from "react";
import { BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";

const HeaderMain = () => {
  const cartItemCount = 0; // Jumlah item di keranjang belanja (gunakan nilai sebenarnya jika tersedia)

  return (
    <div className="border-b border-gray-200 py-6">
      <div className="container flex justify-between items-center">
        <div className="font-bold text-4xl text-center pb-4 sm:pb-0 text-blackish">
          Sickat
        </div>
        <div className="w-full sm:w-1/2 relative flex items-center">
          <input
            className="border-gray-200 border p-2 px-4 rounded-lg w-full mr-4"
            type="text"
            placeholder="Enter any product name..."
          />
          <BsSearch className="text-gray-400" size={20} />
        </div>
        <div className="hidden lg:flex items-center text-gray-500 text-3xl space-x-4">
          <BiUser />
          <div className="relative">
            <FiHeart />
            <div className={`bg-red-600 rounded-full absolute top-0 right-0 w-4 h-4 text-xs text-white grid place-items-center ${cartItemCount === 0 ? 'animate-bounce' : ''}`}>{cartItemCount === 0 ? '0' : ''}</div>
          </div>
          <div className="relative">
          <HiOutlineShoppingBag />
          <div className={`bg-red-600 rounded-full absolute top-0 right-0 w-4 h-4 text-xs text-white grid place-items-center ${cartItemCount === 0 ? 'animate-bounce' : ''}`}>{cartItemCount === 0 ? '0' : ''}</div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
