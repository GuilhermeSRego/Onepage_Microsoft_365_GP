import React, { useState } from "react";
import './styles.css';

import { data } from "../../../data/HorizontalAccordion";

const object = []

data.forEach((data, index) => object.push( { id: index, display: false }))

const HorizontalAccordion = () => {
    const [accordion, setAccordion] = useState(object)

    const onClick = (index) => {
        setAccordion(accordion.map(item => item.id === index ? { ...item, display: !item.display } : { ...item }))
    }

    return (
        <div className="horizontal-accordion">
            { data.map((item, index) => (
                <div className={`accordion ${ accordion[index].display ? 'show' : '' }`} 
                    orientation={item.orientation} 
                    key={index}>
                    <img src={item.image} alt={item.title} onClick={ () => onClick(index) } />
                    <div className="content-wrapper">
                        <div className="content">
                            <div className="inner">
                                <h5>{ item.title }</h5>
                                <p>{ item.description }</p>
                            </div>
                        </div>
                        <div className="outer" style={{background: `linear-gradient(to ${item.orientation === 'left' ? 'right' : 'left'}, rgba(0,0,0,0) 0%, ${ item.color } 25%)`}}></div>
                    </div>
                </div>
            )) }
        </div>
    )
}

export default HorizontalAccordion