import React from "react";
import notFoundGif from "../../assets/image/error-page.gif";
import { DefaultBtn } from "../components.styles";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <section id="not__found">
      <div className="not__found-container">
        <img src={notFoundGif} alt="Not Found Gif" />
        <h1>Nəsə səhv baş verdi</h1>
        <p>Axtardığınız səhifə mövcud deyil</p>
        <Link to="/">
          <DefaultBtn>Geri Qayıt</DefaultBtn>
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
