import React, { useRef } from "react";
import Slider from "react-slick";
import './styles.css';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import carrouselBackground from '../../../assets/images/carrousel/largerCarrousel/bg.png'
import carrouselBackgroundMobile from '../../../assets/images/carrousel/largerCarrousel/bg_mobile.png'

import image1 from '../../../assets/images/carrousel/largerCarrousel/img1.png'

import arrowPrev from '../../../assets/images/carrousel/arrow-left.png'
import arrowNext from '../../../assets/images/carrousel/arrow-right.png'

const LargerCarrousel = () => {
    const slider = useRef(null)

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    
    const prev = () => {
        slider.current.slickPrev()
    }

    const next = () => {
        slider.current.slickNext()
    }

    return (
        <div className="larger-carrousel">
            <img src={carrouselBackground} className="bg" alt="" />
            <img src={carrouselBackgroundMobile} className="bg-m" alt="" />
            <Slider {...settings} ref={slider}>
                <div className="item">
                    <div className="flex-area">
                        <img src={image1} alt="" />
                        <div>
                            <h4>Ornare quis</h4>
                            <h4><span>isus proin</span></h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto blanditiis nulla 
                                assumenda consectetur itaque culpa temporibus aperiam error aliquid accusamus rem 
                                voluptate debitis maiores ut ipsum, cupiditate modi earum quis!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto blanditiis nulla 
                                assumenda consectetur itaque culpa temporibus aperiam error aliquid accusamus rem 
                                voluptate debitis maiores ut ipsum, cupiditate modi earum quis!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto blanditiis nulla 
                                assumenda consectetur itaque culpa temporibus aperiam error aliquid accusamus rem 
                                voluptate debitis maiores ut ipsum, cupiditate modi earum quis!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="flex-area">
                        <img src={image1} alt="" />
                        <div>
                            <h4>Ornare quis</h4>
                            <h4><span>isus proin</span></h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto blanditiis nulla 
                                assumenda consectetur itaque culpa temporibus aperiam error aliquid accusamus rem 
                                voluptate debitis maiores ut ipsum, cupiditate modi earum quis!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto blanditiis nulla 
                                assumenda consectetur itaque culpa temporibus aperiam error aliquid accusamus rem 
                                voluptate debitis maiores ut ipsum, cupiditate modi earum quis!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto blanditiis nulla 
                                assumenda consectetur itaque culpa temporibus aperiam error aliquid accusamus rem 
                                voluptate debitis maiores ut ipsum, cupiditate modi earum quis!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="flex-area">
                        <img src={image1} alt="" />
                        <div>
                            <h4>Ornare quis</h4>
                            <h4><span>isus proin</span></h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto blanditiis nulla 
                                assumenda consectetur itaque culpa temporibus aperiam error aliquid accusamus rem 
                                voluptate debitis maiores ut ipsum, cupiditate modi earum quis!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto blanditiis nulla 
                                assumenda consectetur itaque culpa temporibus aperiam error aliquid accusamus rem 
                                voluptate debitis maiores ut ipsum, cupiditate modi earum quis!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto blanditiis nulla 
                                assumenda consectetur itaque culpa temporibus aperiam error aliquid accusamus rem 
                                voluptate debitis maiores ut ipsum, cupiditate modi earum quis!
                            </p>
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

export default LargerCarrousel