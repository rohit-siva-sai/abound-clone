import Link from "next/link";
import React from "react";
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const FooterSub = () => {
  return (
    <div>
      <div className="flex flex-col space-y-5" >
        <Link href={""}>
          <picture>
            <img
              src="https://uploads-ssl.webflow.com/627132706714e419a1d7a9d4/627cc21912165452b345f9b1_Group%2010276.png"
              alt=""
              className="w-24"
            />
          </picture>
        </Link>
        <div className="flex space-x-4">
          <Link href={""}>
            <div className="p-1 rounded-full bg-green-800 w-fit">
              <FaTwitter className="text-white " size={13} />
            </div>
          </Link>
          <Link href={""}>
            <div className="p-1 rounded-full bg-green-800 w-fit">
              <FaLinkedinIn className="text-white " size={13} />
            </div>
          </Link>
          <Link href={""}>
            <div className="p-1 rounded-full bg-green-800 w-fit">
              <FaFacebookF className="text-white " size={13} />
            </div>
          </Link>
          <Link href={""}>
            <div className="p-1 rounded-full bg-green-800 w-fit">
              <FaInstagram className="text-white " size={13} />
            </div>
          </Link>
        </div>
      </div>
      <div className="flex flex-col space-y-1 pt-5" >
        <p className="font-bold uppercase text-sm" >opening hours:</p>
        <p className="font-light" >Monday - Friday from 9:00 to 17:00</p>
      </div>
      <div className="flex flex-col space-y-1 pt-8 pb-12" >
        <Link href={""}>
          <p className="text-green-800 hover:text-[#feb82b] font-semibold" >Webchat</p>
        </Link>
        <Link href={"tel: 0203 443 8881"}  >
          <p className="text-green-800 hover:text-[#feb82b] font-semibold" >0203 443 8881</p>
        </Link>
        <Link href={"mailto: contact@getabound.com"}>
          <p className="text-green-800 hover:text-[#feb82b] font-semibold" >contact@getabound.com</p>
        </Link>
      </div>
      <div>
        <p className="font-bold uppercase text-sm" >REGISTERED OFFICE:</p>
        <p  className="font-light">Fintern Limited, trading as Abound</p>
        <p  className="font-light">3rd Floor</p>
        <p  className="font-light">86-90 Paul Street</p>
        <p  className="font-light">London, EC2A 4NE</p>
        <p  className="font-light">United Kingdom</p>

      </div>
    </div>
  );
};

export default FooterSub;
