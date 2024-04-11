import React from "react";
import { ArrowButton } from "../components.styles";

function PortfolioCard({ item }) {
  return (
    <div className="portfolio__card">
      <img
        src="https://images.ctfassets.net/5de70he6op10/50QfzqZtznzKmndekG3tdB/63cda335fc12c0b53d7096a5560e54f8/529573435-furniture_gateway_ls_07.jpg"
        alt=""
      />
      <div className="portfolio__card-content">
        <div className="portfolio__card-left">
          <h1>Title</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo,
            enim?
          </p>
        </div>
        <div className="portfolio__card-right">
          <ArrowButton direction="right">
            <i className="ri-arrow-right-line"></i>
          </ArrowButton>
        </div>
      </div>
    </div>
  );
}

export default PortfolioCard;
