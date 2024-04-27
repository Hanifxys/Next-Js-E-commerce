import React from 'react';
import { BsFacebook, BsTwitter, BsInstagram, BsCircle, BsLinkedin, BsGithub } from "react-icons/bs";

const HeaderTop = () => {
  return (
    <div className="border-b border-gray-200 hidden sm:block">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex gap-1 items-center">
          <div className="header_top_icon_wrapper">
  <a href="https://facebook.com">
    <BsFacebook />
  </a>
</div>
<div className="header_top_icon_wrapper">
  <a href="https://github.com/Hanifxys">
    <BsGithub />
  </a>
</div>
<div className="header_top_icon_wrapper">
  <a href="https://instagram.com/hanifxy?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D">
    <BsInstagram />
  </a>
</div>
<div className="header_top_icon_wrapper">
  <a href="https://www.linkedin.com/in/muhamadhanif07">
    <BsLinkedin />
  </a>
</div>

            <div className="text-gray-500 text-sm">-</div>
          </div>
          <div className="text-center">
            <p className="text-sm">Free Shipping This Week on Orders Over $55</p>
          </div>
          <div className="flex gap-2">
            <select name="currency" id="currency" className="rounded-md p-1 bg-gray-200 text-gray-700">
              <option value="USD">$USD</option>
              <option value="EUR">$Rupiah</option>
              <option value="GBP">$GBP</option>
            </select>
            <select name="language" id="language" className="rounded-md p-1 bg-gray-200 text-gray-700">
              <option value="English">English</option>
              <option value="Indonesia">Indonesia</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
