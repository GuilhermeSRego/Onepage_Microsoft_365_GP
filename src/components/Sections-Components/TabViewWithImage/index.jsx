import React, { useState } from "react";
import './styles.css';





import Icon1 from '../../../assets/images/bbasic.png';
import Icon2 from '../../../assets/images/appnegocios.png';
import Icon3 from '../../../assets/images/ms365busstd.png';
import Icon4 from '../../../assets/images/exchange.png';
import Icon5 from '../../../assets/images/teamsessencials.png';

const data = [
    {
        icon: Icon1,
        title:['BUSINESS BASIC'],
        description: [
            'Número de usuários: até 300',
            'Capacidade de armazenamento no e-mail: 50 GB',
            'Capacidade de armazenamento na nuvem: 1 TB',
            'Disponibilidade de acesso: on-line',
            'Serviços inclusos: Word, Excel, PowerPoint, Outlook, Teams, SharePoint, OneDrive e Exchange'



        ]
    },
    {
        icon: Icon2,
        title:['APLICATIVOS PARA NEGÓCIOS'],
        description: [
            'Usuários: Até 300',
            'Espaço de Correio: —',
            'Utilização: Online e Desktop',
            'Compartilhamento: Até 5 dispositivos',
            'Serviços inclusos: Outlook, Word, Excel, PowerPoint, Access, Publisher e OneDrive',




        ]
    },
    {
        icon: Icon3,
        title:['MICROSOFT 365 BUSINESS STANDARD'],
        description: [
            'Número de usuários: até 300',
            'Capacidade de armazenamento no e-mail: 50 GB',
            'Capacidade de armazenamento na nuvem: 1 TB',
            'Disponibilidade de acesso: on-line e instalado em até 5 dispositivos',
            'Serviços inclusos: Word, Excel, PowerPoint, Outlook, Access, Publisher, Teams, SharePoint, OneDrive e Exchange'
        ]
    },
    {
        icon: Icon4,
        title:['EXCHANGE'],
        description: [
            'Plano: Online Kiosk   Espaçode Correio: 2GB',
            'Plano: Online Plano 1 Espaçode Correio: 50GB',
            'Plano: Online Plano 2 Espaçode Correio: 100GB',
        
        ]
    },
    {
        icon: Icon5,
        title:['TEAMS ESSENCIALS'],
        description: [
            'Chat ilimitado',
            'Reuniões on-line e videoconferências para até 300 usuários',
            '10 GB para armazenamento de arquivos e documentos',
            'Versões web e mobile do aplicativo'
        ]
    },
    
]


const TabViewWithImage = () => {
    const [indexItem, setIndexItem] = useState(0)

    const chooseItem = item => {
        setIndexItem(item)
    }

    return (
        <div className="tab-view-with-image">
            
            <div className="tab-icons">
                { data.map((item, index) => (
                    <div className={ `icon ${ index === indexItem ? 'active' : '' }` } key={index} onClick={_ => chooseItem(index)}>
                        <img className="seletor" src={item.icon} alt="Seletor" ></img>
                    </div>
                )) }
            </div>
            <div className="content">
                <div className="title333">
                { data[indexItem].title.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))  }
                </div>
                <div className="text-area">
                    { data[indexItem].description.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))  }
                </div>
            </div>
        </div>
    )
}

export default TabViewWithImage