import React, { useRef } from "react";
import Slider from "react-slick";
import './styles.css';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import image1 from '../../../assets/images/carrousel/smallerCarrousel/icon-1.png'

import arrowPrev from '../../../assets/images/carrousel/arrow-left.png'
import arrowNext from '../../../assets/images/carrousel/arrow-right.png'

const SmallerCarrousel = () => {
    const slider = useRef(null)

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
    };
    
    const prev = () => {
        slider.current.slickPrev()
    }

    const next = () => {
        slider.current.slickNext()
    }

    return (
        <div className="smaller-carrousel">
            <Slider {...settings} ref={slider}>
                <div className="item">
                    <div className="flex-area">
                        <img src={image1} alt="" />
                        <div>
                            <h4>Segurança</h4>
                            <ul>
                                <li>Proteger a empresa contra ameaças</li>
                                <li>Reduzir a vulnerabilidade digital</li>
                                <li>Preservar o sistema do negócio com eficácia</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="flex-area">
                        <img src={image1} alt="" />
                        <div>
                            <h4>safasfdasf</h4>
                            <ul>
                                <li>Proteger a empresa contra ameaças</li>
                                <li>Reduzir a vulnerabilidade digital</li>
                                <li>Preservar o sistema do negócio com eficácia</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="flex-area">
                        <img src={image1} alt="" />
                        <div>
                            <h4>fffffffffff</h4>
                            <ul>
                                <li>Proteger a empresa contra ameaças</li>
                                <li>Reduzir a vulnerabilidade digital</li>
                                <li>Preservar o sistema do negócio com eficácia</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="flex-area">
                        <img src={image1} alt="" />
                        <div>
                            <h4>ffffassasddf</h4>
                            <ul>
                                <li>Proteger a empresa contra ameaças</li>
                                <li>Reduzir a vulnerabilidade digital</li>
                                <li>Preservar o sistema do negócio com eficácia</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Slider>
            <div className="controls">
                <button className="prev" onClick={prev}><img src={arrowPrev} alt="voltar" /></button>
                <button className="next" onClick={next}><img src={arrowNext} alt="avançar" /></button>
            </div>
        </div>
    )
}

export default SmallerCarrousel