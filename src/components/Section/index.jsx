import React from "react";
import './styles.css';

const Section = ({ 
    children, 
    bg = 'none', 
    bgSize = 'cover', 
    bgOrientation = 'center center', 
    mt = '0', 
    id, 
    lineBG = '', 
    bgMask = 'none',
    customClass = ''
}) => {
    return (
        <section 
            className={ customClass }
            style={{
                backgroundImage: `url(${bg})`,
                backgroundPosition: bgOrientation,
                backgroundSize: bgSize,
                marginTop: mt,
                zIndex: mt !== '0' ? '-1' : '0'
            }} id={ id }>
            <div className="section-mask" style={{
                backgroundImage: `url(${bgMask})`,
            }}>
                { children }
            </div>
            { lineBG && <div className="bottom-line" style={{ backgroundColor: lineBG }} /> }
        </section>
    )
}

export default Section