import React from "react";
import './styles.css';
import titled from '../../../assets/images/pacote_vivo.png';
import apps from '../../../assets/images/microsoft-apps.png';
import notify from '../../../assets/images/notify.png';






const VerticalAccordion = () => {
    

    

    return (
        <div className="vertical-accordion">
            <div className="title"> 
                <h2 className="titulotexto">Proposta comercial Vivo</h2>
            </div>
            <div className="div_tit" >
            <img className="apps" src={apps} alt="Microsoft apps"></img>
            </div>

            
            <p>
                Estamos em um mundo onde as soluções precisam parecer cada vez mais rápido; assim, as empresas se mantêm competitivas.<br></br>
                Portanto, você, Gerente de Negócios, deve criar oportunidades para entender as necessidades do cliente e direcionar a solução mais adequada.
            </p>

           
            
        </div>
    )
}

export default VerticalAccordion