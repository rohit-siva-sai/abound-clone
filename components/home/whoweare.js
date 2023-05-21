import React from "react";

const Whoweare = () => {
  return (
    <div className="pb-12" >
      <div className="flex justify-center space-x-16 " >
        <div className="w-2/5  " >
          <div className="underline decoration-[#feb82b] underline-offset-8 font-semibold text-4xl" >Who we are</div>
          <p className="text-gray-600 font-normal text-base pt-6 pb-4"  >When our co-founder Michelle moved to the UK she couldn't get a loan. She had a good job but didn't have a credit score. She then met Gerald and together they spent years working with banks to improve how they decided who to lend money to. Eventually they realised to fix the system, they needed to do it themselves.</p>
          <p className="text-gray-600 font-normal text-base  pb-4" >Our mission is to increase access to affordable loans.</p>
          <p className="text-gray-600 font-normal text-base  pb-4" >Some lenders only look at your credit score. We look at the full picture – what you earn, how you spend, and what&#39;s left at the end.</p>
          <p className="text-gray-600 font-normal text-base pt-6 pb-4" >So whether you0&#39;re borrowing for the first time, consolidating debts, or building up to something big &ndash; we&#39;ll help you get there.</p>
        </div>
       <div  className=" ">
       <picture >
          <img src="https://uploads-ssl.webflow.com/627132706714e419a1d7a9d4/632b1e1392bbca4349e7bd86_ghg-p-500.png" alt="" className="w-80" />
        </picture>
       </div>
      </div>
    </div>
  );
};

export default Whoweare;
