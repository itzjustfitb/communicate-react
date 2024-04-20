import React from "react";
import contactLocationIcon from "../../assets/image/location-icon.png";
import contactEmailIcon from "../../assets/image/message-icon.png";
import contactPhoneIcon from "../../assets/image/phone-icon.png";

function ContactInfo() {
  const contacts = [
    {
      image: contactLocationIcon,
      title: "Address:",
      infos: ["121 King Street Melbourne", "Australia"],
    },
    {
      image: contactEmailIcon,
      title: "Email:",
      infos: ["info@folioflix.com", "folioflix@gmail.com"],
    },
    {
      image: contactPhoneIcon,
      title: "Phone:",
      infos: ["+61 3 8376 6284", "+800 2345 6789"],
    },
  ];

  return (
    <aside className="contact__info" data-aos="slide-right">
      {contacts.map((contact, index) => {
        return (
          <div key={contact.title} className="contact__info-row">
            <div className="contact__info-logo">
              <img src={contact.image} alt={`Contact Logo ${index}`} />
            </div>
            <div className="contact__info-content">
              <h1>{contact.title}</h1>
              {contact.infos.map((info, index) => (
                <a key={index} href="#">
                  {info}
                </a>
              ))}
            </div>
          </div>
        );
      })}
    </aside>
  );
}

export default ContactInfo;
