import { useState } from 'react'
import './styles.css'

import image1 from '../../../assets/images/ShowDownSlider/img-1.png'
import image2 from '../../../assets/images/ShowDownSlider/img-2.png'
import image3 from '../../../assets/images/ShowDownSlider/img-3.png'

const data = [
    {
        image: image1,
        display: true,
        texts: [
            'fasdfasdfasdf',
            'fjalsdfkjasdfiojasojsf',
            'fjaosjdfçlaknvlkzxncvasdfsajdflçkj',
            'sjfpokjzxvkjkçljas'
        ]
    },
    {
        image: image2,
        display: false,
        texts: [
            'fasdfasdfasdf',
            'fjalsdfkjasdfiojasojsf',
            'fjaosjdfçlaknvlkzxncvasdfsajdflçkj',
            'sjfpokjzxvkjkçljas',
            'fasdfasdfasdf',
            'fjalsdfkjasdfiojasojsf',
            'fjaosjdfçlaknvlkzxncvasdfsajdflçkj',
            'sjfpokjzxvkjkçljas',
        ]
    },
    {
        image: image3,
        display: false,
        texts: [
            'fasdfasdfasdf',
            'fjalsdfkjasdfiojasojsf',
            'fjaosjdfçlaknvlkzxncvasdfsajdflçkj',
            'sjfpokjzxvkjkçljas'
        ]
    },
]

const object = []

data.forEach((data, index) => object.push( { id: index, display: false }))


const ShowDownSlider = () => {
    const [showDown, setShowDown] = useState(object)

    const onClick = index => {
        setShowDown(showDown.map(item => item.id === index ? { ...item, display: !item.display } : { ...item }))
    }

    return (
        <div className="show-down-slider">
            <h3>Conteúdo do slide</h3>
            <p>Clique nos quadrinhos para obter mais informações sobre o conteúdo do slide.</p>
            <div className="show-down-wrapper">
                { data.map((item, index) => (
                    <div className={`slider ${ showDown[index].display ? 'show' : '' }`}
                        value={index + 1} 
                        key={index}>
                        <img src={item.image} alt={item.title} onClick={ _ => onClick(index) } draggable="false" />
                        <div className="content-wrapper">
                            <div className="content">
                                { item.texts.map((paragraph, i) => {
                                    return <p key={i}>{paragraph}</p>
                                }) }
                            </div>
                            <div className="outer" style={{background: `linear-gradient(to ${item.orientation === 'left' ? 'right' : 'left'}, rgba(0,0,0,0) 0%, ${ item.color } 25%)`}}></div>
                        </div>
                    </div>
                )) }
            </div>
        </div>
    )
}

export default ShowDownSlider