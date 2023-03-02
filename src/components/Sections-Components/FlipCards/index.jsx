import { useState } from 'react'
import './styles.css'
import imgFlip from '../../../assets/images/cards/img-flip.png'

const cardsData = [
    {
        title: 'Mensageria',
        content: 'Comunicação com o cliente via mensagem inbox na TV.',
        cardColor: '#660099',
    },
    {
        title: 'Recomendação',
        content: 'O Vivo Play recomenda conteúdos relacionados aos programas e filmes buscados e assistidos pelo cliente.',
        cardColor: '#eb3c7d',
    },
    {
        title: 'Controle Remoto',
        content: 'Comunicação com o cliente via mensagem inbox na TV.',
        cardColor: '#FF9C05',
    },
    {
        title: 'Gravador Digital',
        content: 'Cliente grava dois programas ao mesmo tempo e assiste quando quiser, de qualquer ponto da casa.',
        cardColor: '#99cc3a',
    },
    {
        title: 'Lembrete de Programação',
        content: 'Agendamento com aviso de cinco minutos antes do início do evento.',
        cardColor: '#0066cc',
    },
    {
        title: 'Área de assinaturas',
        content: 'Venda de pacotes à la carte diretamente pelo Vivo Play ou em outros dispositivos, sem a necessidade de contato com a Central de Atendimento para ativar o serviço.',
        cardColor: '#41225c',
    },
]

const obj = []

cardsData.forEach((_, index) => obj.push( { id: index, active: false }))

const FlipCards = _ => {
    const [flip, setFlip] = useState(obj)

    const handleFlip = index => {
        setFlip(flip.map(item => item.id === index ? { ...item, active: !item.active } : { ...item }))
    }

    return (
        <div className="flipcards-wrapper">
            <h4>Funcionalidades da Plataforma Exclusiva</h4>
            <div className="flipcards-area">
                { cardsData.map((card, i) => {
                    return (
                        <div className="flipcard" value={`1-${i + 1}`} key={i} onClick={ _ => handleFlip(i) }>
                            <div className={ `flipcard-inner ${ flip[i].active ? 'active' : '' }` }>
                                <div className="flipcard-front" style={{ backgroundColor: card.cardColor }}>
                                    <h4 className="shadow" position="top">{ card.title }</h4>
                                    <h4>{ card.title }</h4>
                                    <h4 className="shadow" position="bottom">{ card.title }</h4>
                                    <img src={ imgFlip } alt={ card.title } className="img-flip" />
                                </div>
                                <div className="flipcard-back" style={{ backgroundColor: card.cardColor }}>
                                    <p>{ card.content }</p>
                                </div>
                            </div>
                        </div>
                    )
                }) }
            </div>
        </div>
    )
}

export default FlipCards