import React from "react";
const array = [
  {
    imageUrl:
      "https://uploads-ssl.webflow.com/627132706714e419a1d7a9d4/62f230a1f0cce85e76264e45_Group%2010255.png",
    heading: "Fast",
    text: "Apply online and get a decision within a day. No more waiting around. If accepted, we try to get you your money within a day.",
  },
  {
    imageUrl:
      "https://uploads-ssl.webflow.com/627132706714e419a1d7a9d4/62f230b2cbc47ff9ad030fd6_Group%2010253.png",
    heading: "Flexible",
    text: "You’re in control. Want to pay back a bit more each month to pay less overall? Need a payment holiday when something unexpected happens?",
  },
  {
    imageUrl:
      "https://uploads-ssl.webflow.com/627132706714e419a1d7a9d4/634ed7907678c40ae98c9c9b_new%20limit.png",
    heading: "Personalised",
    text: "Some lenders only look at your credit score. We look at the full picture – what you earn, how you spend, and what’s left at the end.",
  },
];

const WhyAbound = () => {
  return (
    <div>
      <div className="py-8">
        <div className="text-5xl text-center underline decoration-[#feb82b] underline-offset-[15px] pb-7">
          Why Abound?
        </div>
        <div className="grid grid-cols-3 gap-x-5 px-4">
          {array.map((item) => {
            return (
              <div className="flex flex-col items-center">
                <picture className="">
                  <img src={item.imageUrl} alt="" className="w-44" />
                </picture>
                <p className="font-semibold pb-1">{item.heading}</p>
                <p className="text-gray-500 font-normal leading-7">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyAbound;
