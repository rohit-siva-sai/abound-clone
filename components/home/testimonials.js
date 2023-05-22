import React from "react";
import { array } from "../../data/testimonals";
import "@splidejs/react-splide/css/sea-green";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import TestCard from "./testCard";

const Testimonials = () => {
  return (
    <div className="py-6">
      <div className="underline text-5xl decoration-[#feb82b] text-center underline-offset-8">
        Testimonials
      </div>
      <div className=" px-20 h-fit -mt-12  py-8">
        <Splide
          className=""
         
          options={{
            type: "loop",
            perPage: 3,
            perMove: 1,
            arrows: false,
            autoplay: "play",
          }}
        >
          {array.map((item) => {
            return (
              <SplideSlide>
                <TestCard
                  name={item.name}
                  imageUrl={item.imageUrl}
                  text={item.text}
                  review={item.review}
                />
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
};

export default Testimonials;
