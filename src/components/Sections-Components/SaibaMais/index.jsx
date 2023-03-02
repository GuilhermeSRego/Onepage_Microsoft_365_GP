import React from "react";
import './styles.css';

import Modal from "react-modal";
import titled from '../../../assets/images/proposta_comercial_vivo.png';
import gif from '../../../assets/images/roll-down-2.gif'

Modal.setAppElement('#root')

const SaibaMais = () => {
    
    
    return (
        <div className="saiba-mais">
            <div className="title"> 
                <img className="mobile" src={titled} alt="Titulo"></img>
            </div>
          
            <p>
               Veja aqui um resumo dos produtos que podem ser ofertados na proposta comercial.<br></br>
               Lembrem-se de que, para saber os valores e detalhes de cada pacote, é importante consultar o Book de Ofertas!
            </p>
            
            <div className="divgif">
            <img className="gif" src={gif} alt="Gif"></img>
            </div>
            
        </div>
        
    )
}

export default SaibaMais