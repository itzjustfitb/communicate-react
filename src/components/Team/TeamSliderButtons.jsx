import React from "react";
import { ArrowButton } from "../components.styles";
import { useSwiper } from "swiper/react";

function TeamSliderButtons() {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns">
      <ArrowButton onClick={() => swiper.slidePrev()} direction={"left"}>
        <i className="ri-arrow-left-line"></i>
      </ArrowButton>
      <ArrowButton onClick={() => swiper.slideNext()} direction={"right"}>
        <i className="ri-arrow-right-line"></i>
      </ArrowButton>
    </div>
  );
}

export default TeamSliderButtons;
