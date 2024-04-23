import React from "react";
import { ArrowButton } from "../components.styles";
import { useSwiper } from "swiper/react";

function TeamSliderButtons({ data, setActive }) {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns">
      <ArrowButton
        onClick={() => {
          swiper.slidePrev();
          setActive((prev) => {
            prev = prev - 1;
            if (prev === -1) {
              prev = data.length - 1;
            }
            return prev;
          });
        }}
        direction={"left"}
      >
        <i className="ri-arrow-left-line"></i>
      </ArrowButton>
      <ArrowButton
        onClick={() => {
          swiper.slideNext();
          setActive((prev) => {
            prev = prev + 1;
            if (prev === data.length) {
              prev = 0;
            }
            return prev;
          });
        }}
        direction={"right"}
      >
        <i className="ri-arrow-right-line"></i>
      </ArrowButton>
    </div>
  );
}

export default TeamSliderButtons;
