import React from "react";
import MyQuote from "./myQuote";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";

const LoanPage = () => {
  return (
    <div className="pb-10" >
      <div className="grid grid-cols-2 py-14">
        <div className="w-3/4  flex flex-col items-start pl-20 mx-auto">
          <p className="text-6xl text-gray-800 decoration-[#ac40bb] underline underline-offset-[14px]">
            Loans made
          </p>
          <p className="text-6xl pt-5 text-gray-800 decoration-[#ac40bb] underline underline-offset-[14px]">
            for you
          </p>
          <p className="text-green-800 pr-20 pt-8">
            Every time we pay out a loan, we make a donation to{" "}
            <Link href={""} className="underline decoration-green-800">
              Spread a Smile
            </Link>
          </p>

          <Link href={""}>
            <div className="flex flex-col space-y-1 pt-10 ">
              <div className="flex items-center space-x-1">
                <AiFillStar className="text-green-600" size={25} />
                <p className="font-bold text-xl">Trustpilot</p>
              </div>
              <div className="flex space-x-1">
                <div className="p-1 bg-green-600 w-fit">
                  <AiFillStar className="text-white" size={25} />
                </div>
                <div className="p-1 bg-green-600 w-fit">
                  <AiFillStar className="text-white" size={25} />
                </div>
                <div className="p-1 bg-green-600 w-fit">
                  <AiFillStar className="text-white" size={25} />
                </div>
                <div className="p-1 bg-green-600 w-fit">
                  <AiFillStar className="text-white" size={25} />
                </div>
                <div className="p-1 bg-green-600 w-fit">
                  <AiFillStar className="text-white" size={25} />
                </div>
              </div>
              <div className="flex items-center">
                <p className="text-sm text-gray-700 ">
                  Trustscore <span className="font-semibold">4.9</span> |{" "}
                </p>
                <p className="text-sm text-gray-700 ">
                  &nbsp;<span className="font-semibold">1016</span> reviews
                </p>
              </div>
            </div>
          </Link>
        </div>
        <MyQuote />
      </div>
      <p className="text-sm font-normal text-center" > <span className="font-bold text-green-800 text-base" >Representative Loan Example:</span>₹2,000 loan repayable over 36 months. 36 monthly payments of ₹77.60. Rate of interest 25.8% p.a. Representative 25.8% APR. Total amount repayable ₹2,793.60.</p>
    </div>
  );
};

export default LoanPage;
