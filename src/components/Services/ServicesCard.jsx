import React from "react";

function ServicesCard({ img, title, description, setModalActive }) {
  return (
    <div className="services__card" data-aos="fade-left">
      <div className="services__card-logo">
        <img src={img} alt="" />
      </div>
      <div className="services__card-content">
        <h1>{title}</h1>
        <p>{description}</p>
        <span onClick={() => setModalActive(true)}>Daha ətraflı</span>
      </div>
    </div>
  );
}

export default ServicesCard;
