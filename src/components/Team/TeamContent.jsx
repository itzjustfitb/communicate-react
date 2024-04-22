import React from "react";
import { ArrowButton } from "../components.styles";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import TeamSliderButtons from "./TeamSliderButtons";

function TeamContent({ data, active, setActive }) {
  const swiper = useSwiper();

  return (
    <div className="team__content" data-aos="fade-left">
      <div className="team__content-testimonials">
        <Swiper
          rewind={true}
          navigation={true}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          {data.map((item, index) => {
            return (
              <SwiperSlide>
                <div
                  key={index}
                  className={`testimonial ${
                    index === active ? "active-testimonial" : ""
                  }`}
                >
                  <h1>Komandamız</h1>
                  <div className="testimonial-carousel">
                    <h1>Biznesinizi Nirvanaya çatdıran əməkdaşlarımız</h1>
                    <div className="testimonial__content">
                      <i className="ri-double-quotes-l"></i>
                      <div className="testimonial__datas">
                        <p>{item.description}</p>
                        <div className="testimonial-bottom">
                          <h1>{item.member}</h1>
                          <p>{item.skill}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          <TeamSliderButtons />
        </Swiper>
      </div>
    </div>
  );
}

export default TeamContent;
