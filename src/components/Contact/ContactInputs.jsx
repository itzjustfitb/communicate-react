import React from "react";
import {
  DefaultBtn,
  DefaultInput,
  DefaultTextArea,
} from "../components.styles";

function ContactInputs() {
  return (
    <div className="contact__inputs" data-aos="slide-left">
      <div className="contact__inputs-row">
        <DefaultInput placeholder="Ad" type="text" />
        <DefaultInput placeholder="E-poçt" type="text" />
      </div>
      <div className="contact__inputs-row">
        <DefaultInput placeholder="Nömrəniz" type="number" />
        <DefaultInput placeholder="Başlıq" type="subject" />
      </div>
      <DefaultTextArea placeholder="Mesajınız" />
      <DefaultBtn>Göndər</DefaultBtn>
    </div>
  );
}

export default ContactInputs;
