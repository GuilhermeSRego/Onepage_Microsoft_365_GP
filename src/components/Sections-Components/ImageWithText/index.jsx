import React from "react";
import './styles.css';

import titulo from "../../../assets/images/titulovant.png"
import microsoft from "../../../assets/images/microsoft.png"
import mulher2 from "../../../assets/images/mulher2.jpg"


const ImageWithText = () => {
    return (
        <div className="text">
            <div className="div_imagem">
            <div className="title2"> 
                <h2 className="titulotexto2">Principais vantagens e benefícios de comprar com a Vivo</h2>
            </div>
            <img className="microsoft" src={microsoft} alt="" />
            </div>
       
            <div className="text-area5">
            <ul>
                <li className="lista677">Planos variados para atender a múltiplas necessidades;</li>
                <li className="lista677">Combos com Fibra da Vivo;</li>
                <li className="lista677">Economia, sem necessidade de grandes investimentos em infraestrutura de TI e com programas atualizados;</li>
                <li className="lista677">Mais produtividade para as equipes, com compartilhamento de arquivos em nuvem;</li>
                <li className="lista677">Autonomia para usuários definirem quem ou quais grupos têm acesso a arquivos e pastas;</li>
                <li className="lista677">A Vivo oferece LSP e CSP, diferentemente de outros fornecedores.</li>
            </ul>
            </div>
            <div className="mulher5">
                <img className="imagem-mulher" src={mulher2}></img>
            </div>
        </div>
    )
}

export default ImageWithText