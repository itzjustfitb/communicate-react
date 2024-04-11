import React from "react";
import { ArrowButton } from "../components.styles";

function TeamContent({ data, active, setActive }) {
  return (
    <div className="team__content" data-aos="fade-left">
      <div className="team__content-testimonials">
        {data.map((item, index) => {
          return (
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
          );
        })}
      </div>
      <div className="testimonial__buttons">
        <ArrowButton
          onClick={() =>
            setActive((prev) => {
              prev = prev - 1;
              if (prev === -1) {
                prev = data.length - 1;
              }
              return prev;
            })
          }
          direction={"left"}
        >
          <i className="ri-arrow-left-line"></i>
        </ArrowButton>
        <ArrowButton
          onClick={() =>
            setActive((prev) => {
              prev = prev + 1;
              if (prev === data.length) {
                prev = 0;
              }
              return prev;
            })
          }
          direction={"right"}
        >
          <i className="ri-arrow-right-line"></i>
        </ArrowButton>
      </div>
    </div>
  );
}

export default TeamContent;
