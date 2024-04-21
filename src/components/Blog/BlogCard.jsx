import React from "react";

function BlogCard({ item, id }) {
  const { img, name, date, confirmation, text } = item;

  return (
    <div
      className="blog__card"
      data-aos={id % 2 === 0 ? "fade-up" : "fade-down"}
    >
      <div className="blog__card-image">
        <img src={img} alt="Blog Image" />
      </div>
      <div className="blog__card-container">
        <div className="blog__card-top">
          <p id="blog__card-author">{name}</p>
          <p id="blog__card-date">{date}</p>
        </div>
        <p className="blog__card-info">{confirmation}</p>
        <p className="blog__card-description">{text}</p>
        <a id="readmore" href="#">
          Read more
        </a>
      </div>
    </div>
  );
}

export default BlogCard;
