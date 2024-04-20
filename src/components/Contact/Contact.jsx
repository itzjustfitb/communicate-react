import React from "react";
import ContactInfo from "./ContactInfo";
import ContactInputs from "./ContactInputs";
import contactCornIcon from "../../assets/image/corn-left-icon.png";

function Contact() {
  return (
    <section id="contact">
      <img id="contactCornIcon" src={contactCornIcon} alt="Corn Icon" />
      <div className="contact__container">
        <div className="contact__top" data-aos="fade-up">
          <h3>Bizimlə Əlaqə</h3>
          <h1>Sualın var? Bizimlə əlaqə saxla</h1>
        </div>
        <div className="contact__bottom">
          <ContactInfo />
          <ContactInputs />
        </div>
      </div>
    </section>
  );
}

export default Contact;
