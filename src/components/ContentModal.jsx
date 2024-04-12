import React from "react";
import { ArrowButton } from "./components.styles";

function ContentModal({ modalActive, setModalActive }) {
  return (
    <aside
      onClick={() => setModalActive(false)}
      className={`content__modal ${modalActive ? "active-modal" : ""}`}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="content__modal-container"
      >
        <ArrowButton onClick={() => setModalActive(false)}>
          <i className="ri-close-line"></i>
        </ArrowButton>
        <img
          src="https://html.designingmedia.com/folioflix/assets/image/web-development-model-img.jpg"
          alt=""
        />
        <div className="content__modal-content">
          <h1>Web Development</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <ul>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </li>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </li>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </li>
          </ul>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </aside>
  );
}

export default ContentModal;
