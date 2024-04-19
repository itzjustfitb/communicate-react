import React, { useEffect } from "react";
import { ArrowButton } from "./components.styles";

function ScrollTopBtn() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ArrowButton className="scroll-btn" onClick={scrollToTop}>
      <i className="ri-arrow-up-line"></i>
    </ArrowButton>
  );
}

export default ScrollTopBtn;
