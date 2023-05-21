import React from "react";

const MyLoan = () => {
  return (
    <div>
      <div className=" px-8 flex -space-x-10 justify-center items-center py-5  ">
        <div className="flex bg-green-800 h-fit py-12 px-12 flex-col space-y-8 rounded-3xl">
          <p className="font-bold text-2xl text-white">
            You can apply as long as you:
          </p>
          <div className="flex flex-col space-y-4">
            <div className="flex space-x-3 items-center">
              <picture>
                <img
                  src="https://uploads-ssl.webflow.com/627132706714e419a1d7a9d4/62f6151f1f141beb75e7a6ea_Group%2010293.png"
                  alt=""
                  className="w-5"
                />
              </picture>
              <p className="text-white ">Are at least 18 years old</p>
            </div>
            <div className="flex space-x-3 items-center">
              <picture>
                <img
                  src="https://uploads-ssl.webflow.com/627132706714e419a1d7a9d4/62f6151f1f141beb75e7a6ea_Group%2010293.png"
                  alt=""
                  className="w-5"
                />
              </picture>
              <p className="text-white ">Have the right to live in the UK</p>
            </div>
            <div className="flex space-x-3 items-center">
              <picture>
                <img
                  src="https://uploads-ssl.webflow.com/627132706714e419a1d7a9d4/62f6151f1f141beb75e7a6ea_Group%2010293.png"
                  alt=""
                  className="w-5"
                />
              </picture>
              <p className="text-white ">
                Have your main bank account in the UK
              </p>
            </div>
            <div className="flex space-x-3 items-center">
              <picture>
                <img
                  src="https://uploads-ssl.webflow.com/627132706714e419a1d7a9d4/62f6151f1f141beb75e7a6ea_Group%2010293.png"
                  alt=""
                  className="w-5"
                />
              </picture>
              <p className="text-white ">Have no unresolved defaults or CCJs</p>
            </div>
          </div>
          <div className="px-8 text-sm cursor-pointer py-3 bg-white text-green-800  rounded-full w-fit" >
            Get My Loan
          </div>
        </div>
        <picture>
          <img
            src="https://uploads-ssl.webflow.com/627132706714e419a1d7a9d4/62f23b35760ff7e5488ade0f_White%20Clay%20iPhone%20X%20mockup%20(Front)%20(Mockuuups%20Studio).png"
            alt=""
            className="h-[500px]"
          />
        </picture>
      </div>
    </div>
  );
};

export default MyLoan;
