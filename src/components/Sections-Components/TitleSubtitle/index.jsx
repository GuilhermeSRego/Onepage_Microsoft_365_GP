import React from "react";
import './styles.css'

const TitleSubtitle = ({ title, subtitle }) => {
    return (
        <div className="title-subtitle-area">
            <h2>{ title }</h2>
            <h3>{ subtitle }</h3>
        </div>
    )
}

export default TitleSubtitle