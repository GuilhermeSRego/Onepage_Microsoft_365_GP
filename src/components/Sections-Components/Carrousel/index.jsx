import React from "react";
import './styles.css';
import table from '../../../assets/images/table.png';
import texto from '../../../assets/images/textotablela.png';


const Carrousel = () => {
   



    return (
        <div className="carrousel">
            <img src={texto} className="texto" alt="texto da tabela"></img>
            <img src={table} className="table" alt="tabela"></img>
        </div>
    )
}

export default Carrousel