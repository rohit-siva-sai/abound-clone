import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-40" >
      <div className="bg-green-800 py-2 flex justify-evenly items-center ">
        <picture>
          <img
            src="https://uploads-ssl.webflow.com/627132706714e419a1d7a9d4/62cd7ccbf56f8f467cdd2995_wordmark-green.png"
            alt=""
            className="w-32"
          />
        </picture>
        <div className="flex space-x-2 items-center text-white">
          <Link href={"/"}>
            <div className="w-20 text-center py-1 font-medium transition-all duration-100 rounded-md hover:bg-white hover:text-green-800" >Careers</div>
          </Link>
          <Link href={"/"}>
            <div className="w-20 text-center py-1 font-medium transition-all duration-100 rounded-md hover:bg-white hover:text-green-800" >Blog</div>
          </Link>
          <Link href={"/"}>
            <div className="w-20 text-center py-1 font-medium transition-all duration-100 rounded-md hover:bg-white hover:text-green-800" >About Us</div>
          </Link>
          <Link href={"/"}>
            <div className="w-20 text-center py-1 font-medium transition-all duration-100 rounded-md hover:bg-white hover:text-green-800" >FAQs</div>
          </Link>
        </div>
        <div className="flex space-x-3 items-center" >
            <div className="px-8 py-2 text-lg transition-all duration-100 border-2 border-white tracking-wider font-medium hover:bg-white rounded-full hover:text-green-800 text-white cursor-pointer" >Login</div>
            <div className="px-8 py-2 text-lg transition-all duration-100 border-2 border-[#feb82b] tracking-wider font-medium bg-[#feb82b] rounded-full text-green-800 hover:text-[#feb82b] hover:bg-transparent cursor-pointer" >Apply</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
