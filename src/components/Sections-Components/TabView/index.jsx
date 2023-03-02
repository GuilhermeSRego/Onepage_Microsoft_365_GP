import { useState, useRef, useEffect } from 'react'
import './styles.css'

const tabData = [
    {
        tab: 'destaques',
        title: 'lorem ipsum',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sunt explicabo amet laborum, cupiditate non mollitia ipsum voluptates repudiandae rerum fuga doloremque maiores assumenda nostrum reiciendis molestias nihil neque iure.'
    },
    {
        tab: 'inovação',
        title: 'ajfaspkj',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sunt explicabo amet laborum, cupiditate non mollitia ipsum voluptates repudiandae rerum fuga doloremque maiores assumenda nostrum reiciendis molestias nihil neque iure.'
    },
    {
        tab: 'produtos',
        title: 'lorem ipsuadsffam',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sunt explicabo amet laborum, cupiditate non mollitia ipsum voluptates repudiandae rerum fuga doloremque maiores assumenda nostrum reiciendis molestias nihil neque iure.'
    },
    {
        tab: 'impressões',
        title: 'lorsfjasem ipsum',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sunt explicabo amet laborum, cupiditate non mollitia ipsum voluptates repudiandae rerum fuga doloremque maiores assumenda nostrum reiciendis molestias nihil neque iure.'
    },
    {
        tab: 'estrelas',
        title: 'lorem 8888ipsum',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sunt explicabo amet laborum, cupiditate non mollitia ipsum voluptates repudiandae rerum fuga doloremque maiores assumenda nostrum reiciendis molestias nihil neque iure.'
    },
    {
        tab: 'confiança',
        title: 'lorem pspsps',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sunt explicabo amet laborum, cupiditate non mollitia ipsum voluptates repudiandae rerum fuga doloremque maiores assumenda nostrum reiciendis molestias nihil neque iure.'
    },
]

const TabView = () => {
    const lineRef = useRef()
    const [active, setActive] = useState(0)

    const handleClick = index => {
        setActive(index)
    }

    const handleLine = i => {
        const selectedReference = document.querySelectorAll('.tab-view li')[i]
        const line = lineRef.current

        line.style.top = `${selectedReference.offsetTop + (selectedReference.offsetHeight / 2) + 4 }px`
        line.style.height = `${selectedReference.offsetHeight * 2}px`
    }

    useEffect(() => {
        handleLine(active)
    }, [active])

    return (
        <div className="tab-view">
            <div className="line-area">
                <div className="line">
                    <div className="inner-line" ref={ lineRef } />
                </div>
                <ul>
                    { tabData.map((tab, i) => {
                        return (
                            <li key={i} className={ i === active ? 'active' : '' } onClick={_ => handleClick(i)} >{ tab.tab }</li>
                        )
                    }) }
                </ul>
            </div>
            <div className="content">
                <h3 className="title">{ tabData[active].title }</h3>
                <p>{ tabData[active].description }</p>
            </div>
        </div>
    )
}

export default TabView