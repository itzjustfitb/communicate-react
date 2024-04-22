import React, { useEffect, useState } from "react";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import { DefaultBtn, DefaultCircle } from "../components.styles";
import desireBgLeft from "../../assets/image/circle-bg-img.png";
import desireHalfCircle from "../../assets/image/half-circle-right-icon.png";
const Desire = () => {
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const [thirdValue, setThirdValue] = useState(0);
  const [fourthValue, setFourthValue] = useState(0);

  const [firstPrice, setFirstPrice] = useState(0);
  const [secondPrice, setSecondPrice] = useState(0);
  const [thirdPrice, setThirdPrice] = useState(0);
  const [fourthPrice, setFourthPrice] = useState(0);
  const [firstCheckboxPrice, setFirstCheckboxPrice] = useState({
    price: 0,
    isChecked: false,
  });
  const [secondCheckboxPrice, setSecondCheckboxPrice] = useState({
    price: 0,
    isChecked: false,
  });
  const [thirdCheckboxPrice, setThirdCheckboxPrice] = useState({
    price: 0,
    isChecked: false,
  });
  const [fourthCheckboxPrice, setFourthCheckboxPrice] = useState({
    price: 0,
    isChecked: false,
  });
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const sum =
      firstPrice +
      secondPrice +
      thirdPrice +
      fourthPrice +
      firstCheckboxPrice.price +
      secondCheckboxPrice.price +
      thirdCheckboxPrice.price +
      fourthCheckboxPrice.price;
    setTotalPrice(sum);
  }, [
    firstPrice,
    secondPrice,
    thirdPrice,
    fourthPrice,
    firstCheckboxPrice.price,
    secondCheckboxPrice.price,
    thirdCheckboxPrice.price,
    fourthCheckboxPrice.price,
  ]);

  const handleFirstChange = (event) => {
    setFirstValue(event.target.value);
    setFirstPrice(event.target.value * 50);
  };
  const handleSecondChange = (event) => {
    setSecondValue(event.target.value);
    setSecondPrice(event.target.value * 15);
  };

  const handleThirdChange = (event) => {
    setThirdValue(event.target.value);
    setThirdPrice(event.target.value * 150);
  };
  const handleFourthChange = (event) => {
    setFourthValue(event.target.value);
    setFourthPrice(event.target.value * 15);
  };

  return (
    <section id="desire">
      <DefaultCircle color="#003E68" className="default-circle" />
      <img
        id="desireHalfCircle"
        src={desireHalfCircle}
        alt="Desire Half Circle"
      />
      <div className="desire__container">
        <div className="desire__top" data-aos="fade-up">
          <h1>Öz istəyinə görə seç</h1>
        </div>
        <div className="desire__bottom">
          <div className="desire__left" data-aos="slide-right">
            <div className="desire__input-row">
              <div className="desire__input-title">
                <i className="ri-edit-box-line"></i>
                <h1>Motion video</h1>
              </div>
              <input
                onChange={handleFirstChange}
                type="range"
                value={firstValue}
                min="0"
                max="15"
                readOnly
              />
              <div className="desire__input-description">
                Siz {firstValue} seçim etdiniz və xidmət haqqı:
                <span>
                  {firstPrice} <p>AZN</p>
                </span>
              </div>
            </div>
            <div className="desire__input-row">
              <div className="desire__input-title">
                <i className="ri-image-fill"></i>
                <h1>Foto çəkiliş</h1>
              </div>
              <input
                onChange={handleSecondChange}
                type="range"
                value={secondValue}
                min="0"
                max="15"
                readOnly
              />
              <div className="desire__input-description">
                Siz {secondValue} seçim etdiniz və xidmət haqqı:
                <span>
                  {secondPrice} <p>AZN</p>
                </span>
              </div>
            </div>
            <div className="desire__input-row">
              <div className="desire__input-title">
                <i className="ri-film-fill"></i>
                <h1>Video çəkiliş</h1>
              </div>
              <input
                onChange={handleThirdChange}
                type="range"
                value={thirdValue}
                min="0"
                max="15"
                readOnly
              />
              <div className="desire__input-description">
                Siz {thirdValue} seçim etdiniz və xidmət haqqı:
                <span>
                  {thirdPrice} <p>AZN</p>
                </span>
              </div>
            </div>
            <div className="desire__input-row">
              <div className="desire__input-title">
                <i className="ri-layout-grid-fill"></i>
                <h1>Qrafik post</h1>
              </div>
              <input
                onChange={handleFourthChange}
                type="range"
                value={fourthValue}
                min="0"
                max="15"
                readOnly
              />
              <div className="desire__input-description">
                Siz {fourthValue} seçim etdiniz və xidmət haqqı:
                <span>
                  {fourthPrice} <p>AZN</p>
                </span>
              </div>
            </div>
          </div>
          <div className="desire__right" data-aos="slide-left">
            <div className="desire__checkboxes">
              <div className="desire__checkbox-row">
                <ReportGmailerrorredIcon className="report" />
                <label htmlFor="checkbox-1">
                  <input
                    onClick={() => {
                      setFirstCheckboxPrice((prev) => ({
                        ...prev,
                        isChecked: !prev.isChecked,
                        price: !prev.isChecked ? 50 : 0,
                      }));
                    }}
                    type="checkbox"
                    id="checkbox-1"
                  />
                  Location Targeting
                </label>
                <div className="message">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                </div>
              </div>
              <div className="desire__checkbox-row">
                <ReportGmailerrorredIcon className="report" />
                <label htmlFor="checkbox-2">
                  <input
                    onClick={() => {
                      setSecondCheckboxPrice((prev) => ({
                        ...prev,
                        isChecked: !prev.isChecked,
                        price: !prev.isChecked ? 200 : 0,
                      }));
                    }}
                    type="checkbox"
                    id="checkbox-2"
                  />
                  Menu Sistem + Edit
                </label>
                <div className="message">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                </div>
              </div>
              <div className="desire__checkbox-row">
                <ReportGmailerrorredIcon className="report" />
                <label htmlFor="checkbox-3">
                  <input
                    onClick={() => {
                      setThirdCheckboxPrice((prev) => ({
                        ...prev,
                        isChecked: !prev.isChecked,
                        price: !prev.isChecked ? 100 : 0,
                      }));
                    }}
                    type="checkbox"
                    id="checkbox-3"
                  />
                  Tiktok Management
                </label>
                <div className="message">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                </div>
              </div>
              <div className="desire__checkbox-row">
                <ReportGmailerrorredIcon className="report" />
                <label htmlFor="checkbox-4">
                  <input
                    onClick={() => {
                      setFourthCheckboxPrice((prev) => ({
                        ...prev,
                        isChecked: !prev.isChecked,
                        price: !prev.isChecked ? 150 : 0,
                      }));
                    }}
                    type="checkbox"
                    id="checkbox-4"
                  />
                  Branding
                </label>
                <div className="message">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                </div>
              </div>
            </div>

            <div className="desire__result">
              <p>
                Total: <span>{totalPrice} AZN</span>
              </p>
              <DefaultBtn>Submit</DefaultBtn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Desire;
