import circleright from "../../assets/image/half-circle-right-icon.png";
import React, { useState } from 'react';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import { SumbitBtn } from "../components.styles";
const Desire = () => {
    const [value, setValue] = useState(0); // Varsayılan değer 0
    const [twovalue, setTwovalue] = useState(0)
    const [threvalue, setThrevalue] = useState(0)
    const [forvalue, setForvalue] = useState(0)
    const [clickCount, setClickCount] = useState(0); // Tıklama sayısını takip etmek için bir state
    const [clicks, setClicks] = useState(0); // Tıklama sayısını takip etmek için bir state
    const [clicksthree, setClickThree] = useState(0); // Tıklama sayısını takip etmek için bir state
    const [clicksfor, setClickFor] = useState(0); // Tıklama sayısını takip etmek için bir state

    const handleChange = (event) => {
        setValue(event.target.value);
    };


    const handleSlide = () => {
        // Input değerini 1-15 aralığında tut
        setValue(prevValue => {
            let newValue = prevValue + (clickCount === 0 ? 0 : 150); // İlk tıklamadan sonra 150 ekleyerek arttır
            // Değer 15'ten büyükse 15'e, 1'den küçükse 1'e sabitle
            newValue = Math.max(1, Math.min(15, newValue));
            return newValue;
        });
        // Tıklama sayısını bir arttır
        setClickCount(prevCount => prevCount + 1);
    };

    const handletwoSlide = () => {
        // Input değerini 1-15 aralığında tut
        setTwovalue(prevValue => {
            let newValue = prevValue + (clicks === 0 ? 0 : 15); // İlk tıklamadan sonra 15 ekleyerek arttır
            // Değer 15'ten büyükse 15'e, 1'den küçükse 1'e sabitle
            newValue = Math.max(1, Math.min(15, newValue));
            return newValue;
        });
        // Tıklama sayısını bir arttır
        setClicks(prevCount => prevCount + 1);
    };


    const handlethreeSlide = () => {
        // Input değerini 1-15 aralığında tut
        setThrevalue(prevValue => {
            let newValue = prevValue + (clicksthree === 0 ? 0 : 15); // İlk tıklamadan sonra 15 ekleyerek arttır
            // Değer 15'ten büyükse 15'e, 1'den küçükse 1'e sabitle
            newValue = Math.max(1, Math.min(15, newValue));
            return newValue;
        });
        // Tıklama sayısını bir arttır
        setClickThree(prevCount => prevCount + 1);
    };

    const handleforeSlide = () => {
        // Input değerini 1-15 aralığında tut
        setForvalue(prevValue => {
            let newValue = prevValue + (clicksfor === 0 ? 0 : 15); // İlk tıklamadan sonra 15 ekleyerek arttır
            // Değer 15'ten büyükse 15'e, 1'den küçükse 1'e sabitle
            newValue = Math.max(1, Math.min(15, newValue));
            return newValue;
        });
        // Tıklama sayısını bir arttır
        setClickFor(prevCount => prevCount + 1);
    };



    const handletwoChange = (event) => {
        setTwovalue(event.target.value);
    };

    const handlethreeChange = (event) => {
        setThrevalue(event.target.value);
    };
    const handleforChange = (event) => {
        setForvalue(event.target.value);
    };

    return (
        <>
            <section className="desire">

                <div className="desire__container">
                
                    <div className="desire__sections">

                        <h2 className="desire__top">Öz istəyinə görə seç</h2>

                        <div className="circlesbox">

                        </div>

                    </div>

                    <div className="desire__centers">

                        <div className="desire__left">



                            <div className="colchild4">
                                <label className="svgtext" htmlFor="item4">

                                    <svg
                                        xmlns="data:image/jpeg;base64,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"
                                        width="44"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        style={{ fill: 'rgba(13, 13, 13, 1)', transform: 'msFilter' }}
                                        onMouseDown={handleforeSlide}
                                        onTouchStart={handleforeSlide}
                                    >

                                        <path
                                            d="m7 17.013 4.413-.015 9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583-1.597 1.582-1.586-1.585 1.594-1.58zM9 13.417l6.03-5.973 1.586 1.586-6.029 5.971L9 15.006v-1.589z"
                                        />
                                    </svg>
                                    Motion video
                                </label>
                                <br />
                                <input
                                    onChange={handleforChange}
                                    type="range"
                                    id="item1"
                                    value={forvalue}
                                    min="0"
                                    max="15"
                                    name="item1"
                                    className="slider"
                                    readOnly // input değeri, kullanıcı tarafından doğrudan değiştirilemez
                                />
                                <br />
                                <span id="item1Counter">Siz {forvalue} seçim etdiniz və xidmət haqqı :</span>
                                <span id="item1Span">{forvalue * (clicksfor === 0 ? 50 : -50)}Azn</span>

                            </div>




                            <div className="colchild2">
                                <label className="svgtext" htmlFor="item2">
                                    <svg
                                        xmlns="https://i.pinimg.com/564x/53/ac/ea/53acea7a02a223609fe0c035bcaef4a3.jpg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        style={{ fill: 'rgba(13, 13, 13, 1)', transform: 'msFilter' }}
                                        onMouseDown={handletwoSlide}
                                        onTouchStart={handletwoSlide}
                                    >

                                        <path
                                            d="M19.999 4h-16c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-13.5 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5.5 10h-7l4-5 1.5 2 3-4 5.5 7h-7z"
                                        />
                                    </svg>
                                    Foto çəkiliş
                                </label>
                                <br />
                                <input
                                    onChange={handletwoChange}
                                    type="range"
                                    id="item1"
                                    value={twovalue}
                                    min="0"
                                    max="15"
                                    name="item1"
                                    className="slider"
                                    readOnly // input değeri, kullanıcı tarafından doğrudan değiştirilemez
                                />
                                <br />

                                <span className="valuescounter" id="item1Counter">Siz {twovalue} seçim etdiniz və xidmət haqqı :</span>
                                <span id="item1Span">{twovalue * (clicks === 0 ? 15 : -15)}Azn</span>

                            </div>




                            <div className="colchild1">
                                <label className="svgtext" htmlFor="item1">
                                    <svg
                                        xmlns="https://i.pinimg.com/564x/53/ac/ea/53acea7a02a223609fe0c035bcaef4a3.jpg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        style={{ fill: 'rgba(13, 13, 13, 1)', transform: 'msFilter' }}
                                        onMouseDown={handleSlide}
                                        onTouchStart={handleSlide}
                                    >

                                        <path
                                            d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm.001 6c-.001 0-.001 0 0 0h-.465l-2.667-4H20l.001 4zM15.5 15 10 18v-6l5.5 3zm-.964-6-2.667-4h2.596l2.667 4h-2.596zm-2.404 0H9.536L6.869 5h2.596l2.667 4zM4 5h.465l2.667 4H4V5z"
                                        />
                                    </svg>
                                    Video çəkiliş
                                </label>
                                <br />
                                <input
                                    onChange={handleChange}
                                    type="range"
                                    id="item1"
                                    value={value}
                                    min="0"
                                    max="15"
                                    name="item1"
                                    className="slider"
                                    readOnly // input değeri, kullanıcı tarafından doğrudan değiştirilemez
                                />
                                <br />
                                <span id="item1Counter">Siz {value} seçim etdiniz və xidmət haqqı :</span>
                                <span id="item1Span">{value * (clickCount === 0 ? 150 : -150)}Azn</span>

                            </div>



                            <div className="colchild3">
                                <label className="svgtext" htmlFor="item3">
                                    <svg
                                        xmlns="https://i.pinimg.com/564x/53/ac/ea/53acea7a02a223609fe0c035bcaef4a3.jpg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        style={{ fill: 'rgba(13, 13, 13, 1)', transform: 'msFilter' }}
                                        onMouseDown={handlethreeSlide}
                                        onTouchStart={handlethreeSlide}
                                    >

                                        <path
                                            d="M19 3H5c-1.103 0-2 .897-2 2v4h18V5c0-1.103-.897-2-2-2zM3 19c0 1.103.897 2 2 2h8V11H3v8zm12 2h4c1.103 0 2-.897 2-2v-8h-6v10z"
                                        />
                                    </svg>
                                    Qrafik post
                                </label>
                                <br />
                                <input
                                    onChange={handlethreeChange}
                                    type="range"
                                    id="item1"
                                    value={threvalue}
                                    min="0"
                                    max="15"
                                    name="item1"
                                    className="slider"
                                    readOnly // input değeri, kullanıcı tarafından doğrudan değiştirilemez
                                />
                                <br />
                                <span id="item1Counter">Siz {threvalue} seçim etdiniz və xidmət haqqı :</span>
                                <span id="item1Span">{threvalue * (clicksthree === 0 ? 15 : -15)}Azn</span>

                            </div>


<div className="senduser">
    <h3>Number</h3>
    <input type="text" />
</div>



                        </div>








                        <div className="desire__right">
                            <div class="checkbox-container">
                                <p className="report">
                                    <ReportGmailerrorredIcon />
                                </p>
                                <input type="checkbox" id="myCheckbox1" />
                                <label className="labeltext" for="myCheckbox1">
                                    <p className="labeltexts">Location Targeting</p>
                                </label>
                                <div class="message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui unde itaque eaque excepturi, consequuntur repudiandae delectus tempora laudantium blanditiis ex deserunt necessitatibus ipsum vero culpa? Quasi est doloribus non impedit.</div>
                            </div>

                            <div class="checkbox-container">
                                <p className="report">
                                    <ReportGmailerrorredIcon />
                                </p>
                                <input type="checkbox" id="myCheckbox2" />
                                <label className="labeltexttwo" for="myCheckbox2">
                                    <p className="labeltexts">Menu Sistem+Edit</p>
                                </label>
                                <div class="messagetwo">Lorem ipsum dolor sit amet consectetur adipisicing elit. .</div>
                            </div>

                            <div class="checkbox-container">
                                <p className="report">
                                    <ReportGmailerrorredIcon />
                                </p>
                                <input type="checkbox" id="myCheckbox3" />
                                <label className="labeltextthree" for="myCheckbox3">
                                    <p className="labeltexts">Tiktok Management</p>
                                </label>
                                <div class="messagethree">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui unde itaque eaque excepturi, consequuntur repudiandae delectus tempora laudantium blanditiis ex deserunt necessitatibus ipsum vero culpa? Quasi est doloribus non impedit.</div>
                            </div>

                            <div class="checkbox-container">
                                <p className="report">
                                    <ReportGmailerrorredIcon />
                                </p>
                                <input type="checkbox" id="myCheckbox4" />
                                <label className="labeltextfor" for="myCheckbox4">
                                    <p className="labeltexts">Branding</p>
                                </label>
                                <div class="messagetwo">Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>
                            </div>




                        <div className="desirebottom">

                        <p className="totalscro">Total:50</p>

                        <SumbitBtn >
                            Submit
                        </SumbitBtn>
                        </div>
                        </div>




                    </div>
                </div>



            </section>





        </>
    )
}

export default Desire