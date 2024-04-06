import React from "react";

function ServicesCard({ img, title, description }) {
  return (
    <div className="services__card">
      <div className="services__card-logo">
        <img src={img} alt="" />
      </div>
      <div className="services__card-content">
        <h1>{title}</h1>
        <p>{description}</p>
        <span>Daha ətraflı</span>
      </div>
    </div>
  );
}

export default ServicesCard;
