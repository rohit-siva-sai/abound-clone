import { useStore } from "@/useStore/store";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";

import { ImPencil } from "react-icons/im";
import { BiRupee,BiTimer } from "react-icons/bi";
import { useRouter } from "next/router";
import Link from "next/link";

const MyQuote = () => {
  const [amount, setAmount] = useState(5000);
  const [tenure, setTenure] = useState(36);
  const [focus1, setFocus1] = useState(false);
  const [focus2, setFocus2] = useState(false);
  const [loading, setLoading] = useState(false);
  const principalAmount = useStore((store) => store.principalAmount);
  const amountChange = useStore((store) => store.amountChange);
  // const router = useRouter();

  const handleAmount = (e) => {
    if (amount < 1000) {
      console.log("ashgsahg");
      return;
    }

    amountChange(amount, tenure);
    setLoading(false);
  };

  const handleChange = async (e) => {
    setAmount(e.target.value);
    handleAmount();
  };
  useEffect(() => {
    if (amount < 1000 || tenure < 12) return;

    amountChange(amount, tenure);
  }, [amount, tenure]);

  return (
    <div className="">
      <div className="rounded-3xl relative shadow-[0_5px_35px_-14px] shadow-green-800 flex flex-col border md:mr-48  px-10 py-10">
        <div className="flex flex-col space-y-2">
          <div className="flex justify-between items-start pt-2">
            <p className="font-bold text-lg">Borrowing Amount</p>
            <div
              className={`flex space-x-0 group ${
                focus1 ? "border-[3px]" : "border-2"
              } items-center ] ${
                amount < 1000 ? "border-red-700" : "border-green-800"
              }  px-3 py-1 rounded-full `}
            >
              <BiRupee size={19} />
              <input
                type="text"
                name=""
                value={amount}
                max={10000}
                onChange={handleChange}
                id=""
                onFocus={() => {
                  setFocus1(true);
                }}
                onBlur={()=>{setFocus1(false)}}
                className="outline-none  text-center f  font-bold text-lg w-14 "
              />
              <ImPencil className="text-green-800 pl-1" size={18} />
            </div>
          </div>
          <div className="flex flex-col -space-y-4">
            <Slider
              min={1000}
              max={10000}
              tooltip={false}
              value={Number(amount)}
              onChangeStart={() => {
                setLoading(true);
              }}
              onChange={setAmount}
              onChangeComplete={() => {
                if (amount < 1000) return;
                handleAmount();
              }}
            />
            <div className="flex font-semibold justify-between text-[14px] ">
              <p>₹1000</p>
              <p>₹10000</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-2 pt-2">
          <div className="flex justify-between items-start pt-2">
            <p className="font-bold text-lg">Months to repay</p>
            <div
              className={`flex space-x-0 group ${
                focus2 ? "border-[3px]" : "border-2"
              } items-center ] ${
                tenure < 12 ? "border-red-700" : "border-green-800"
              }  px-3 py-1 rounded-full `}
            >
              <BiTimer size={19} />
              <input
                type="text"
                name=""
                value={tenure}
                max={10000}
                onChange={(e) => {
                  setTenure(e.target.value);
                  handleAmount;
                }}
                id=""
                onFocus={() => {
                  setFocus2(true);
                }}
                onBlur={()=>{setFocus2(false)}}
                className="outline-none  text-center   font-bold text-lg w-14 "
              />
              <ImPencil className="text-green-800 pl-1" size={18} />
            </div>
          </div>
          <div className="flex flex-col -space-y-4">
            <Slider
              min={12}
              max={36}
              tooltip={false}
              value={Number(tenure)}
              onChangeStart={() => {
                setLoading(true);
              }}
              onChange={setTenure}
              onChangeComplete={handleAmount}
            />
            <div className="flex font-semibold justify-between px-1 text-[14px] ">
              <p>12</p>
              <p>36</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between pt-6">
          <div className="flex flex-col">
            {loading ? (
              <div className="font-bold  items-center flex -space-x-1 text-2xl font-mono ">
                Loading...
              </div>
            ) : (
              <div className="font-bold text-3xl font-mono ">10%</div>
            )}
            <p className="text-sm text-gray-600 font-medium">
              Representative APR
            </p>
          </div>
          <div className="flex flex-col items-center ">
            {loading ? (
              <div className="font-bold  items-center flex -space-x-1 text-2xl font-mono ">
                Loading...
              </div>
            ) : (
              <div className="font-bold  items-center flex -space-x-1 text-3xl font-mono ">
                <BiRupee size={25} />
                <p>{(principalAmount * tenure).toFixed(2)}</p>
              </div>
            )}

            <p className="text-sm  text-gray-600 font-medium">
              Total repayable
            </p>
          </div>
          <div className="flex flex-col items-end">
            {loading ? (
              <div className="font-bold  items-center flex -space-x-1 text-2xl font-mono ">
                Loading...
              </div>
            ) : (
              <div className="font-bold text-3xl font-mono ">
                {principalAmount.toFixed(2)}
              </div>
            )}

            <p className="text-sm text-gray-600 font-medium">
              Monthly repayment
            </p>
          </div>
        </div>
        <Link href={"https://lendingclub-clone.vercel.app/loanType"}  >
        <div
          className=" hover:w-72 cursor-pointer transition-all duration-500 absolute  left-[50%]  -bottom-6 translate-x-[-50%] bg-green-800  py-3 rounded-full w-56 text-white font-bold
         font-sans"
        >
          <p  className="text-center">Get My Quote</p>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default MyQuote;
