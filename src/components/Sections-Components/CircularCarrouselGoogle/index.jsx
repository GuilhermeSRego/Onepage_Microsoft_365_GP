import { useState, useEffect, useRef } from 'react'
import './index.css'

import gsap from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

import setaUp from "../../../assets/images/google/workspace/CircularCarrousel/setinhaup.png"
import setaDown from "../../../assets/images/google/workspace/CircularCarrousel/setinhadown.png"
import titulovendas from '../../../assets/images/titulovenda.png';

// import { ReactComponent as Icon1 } from '../../../assets/images/carrousel/circularCarrousel/img-1.svg';
// import { ReactComponent as Icon2 } from '../../../assets/images/carrousel/circularCarrousel/img-2.svg';
// import { ReactComponent as Icon3 } from '../../../assets/images/carrousel/circularCarrousel/img-3.svg';
// import { ReactComponent as Icon4 } from '../../../assets/images/carrousel/circularCarrousel/img-4.svg';



import { ReactComponent as Icon1 } from '../../../assets/images/google/workspace/CircularCarrousel/img-1-Cloud.svg';
import { ReactComponent as Icon2 } from '../../../assets/images/google/workspace/CircularCarrousel/img-2-infinity.svg';
import { ReactComponent as Icon3 } from '../../../assets/images/google/workspace/CircularCarrousel/img-3-porquinho.svg';
import { ReactComponent as Icon4 } from '../../../assets/images/google/workspace/CircularCarrousel/img-4-world.svg';
import { ReactComponent as Icon5 } from '../../../assets/images/google/workspace/CircularCarrousel/img-1-Cloud.svg';

const data = [
    {
        title: "Custos de TI reduzidos",
        text: ["Consolidar aplicativos garante maior eficiência de custos. Geralmente, há taxas que estão associadas aos aplicativos na nuvem e a maioria dos aplicativos de negócios cobra uma taxa mensal a partir do número de usuários ou quantidade de armazenamento usado, o que aumenta com o uso de mais aplicativos. Além disso, gerenciar várias assinaturas pode ser incômodo. Consolidar o faturamento garante uma visão melhor sobre o que sua empresa está usando e o valor que está obtendo com seus aplicativos na nuvem.",],
        image: <Icon1 />
    },
    {
        title: "Faça mais",
        text: ['Utilizar muitos aplicativos reduz a produtividade. Alternar entre o uso de diferentes aplicativos desperdiça tempo e frustra funcionários. A consolidação pode agilizar o trabalho:',
    'Um único aplicativo para chats, chamadas e reuniões para que os funcionários alternem os modos de comunicação mais rápido;',
    'Junção de aplicativos para trabalhar em um projeto, que permite colaboração em um documento, revisão e comunicação entre colaboradores permitida pela Microsoft Teams;',
    'Informações armazenadas em uma única plataforma, sem necessidade de procurar em outras plataformas.'
    ],
        image: <Icon2 />
    },
    {
        title: "Simplifique a tecnologia",
        text: ['Os aplicativos na nuvem são mais simples de configurar do que as soluções locais, o que não significa que estejam livres de complicações, necessitando de suporte de TI para manutenção. Quando se tem aplicativos para oferecer suporte, há a liberação da equipe de TI, sendo investido mais tempo em iniciativas mais importantes que impulsionarão os negócios das empresas.'],
        image: <Icon3 />
    },
    {
        title: "Acesse os melhores insights",
        text: ['Consolidar aplicativos em uma única solução ou em um conjunto de ferramentas de business intelligence bem integradas garante mais facilidade para as pessoas analisarem dados em toda a empresa e descobrirem os principais insights que ajudam a tomar decisões mais inteligentes.'],
        image: <Icon4 />
    },
    {
        title: "Segurança reforçada",
        text: ['No mundo atual, cada dispositivo, conta de usuário e aplicativo é uma porta de entrada em potencial para agentes mal-intencionados que desejam roubar dados ou interromper seus negócios. A redução do número de aplicativos que a equipe de trabalho usa simplifica a segurança.'],
        image: <Icon5 />
    },
    
]


let rendered = false
let items, numItems, itemStep, wrapProgress, snap, wrapTracker, tracker = { item: 0 }, tl

const CircularCarrousel = () => {
    // eslint-disable-next-line
    const [itemActive, setItemActive] = useState(0)
    const [totalItems, setTotalItems] = useState()

    const circleRef = useRef()
    const svgRef = useRef()
    useEffect(() => {
        gsap.registerPlugin(MotionPathPlugin)

        items = gsap.utils.toArray(`.circular-carrousel .item`)
        numItems = items.length
        itemStep = 1 / numItems
        wrapProgress = gsap.utils.wrap(0, 1)
        snap = gsap.utils.snap(itemStep)
        wrapTracker = gsap.utils.wrap(0, numItems)

        setTotalItems(numItems)
    }, [])

    useEffect(() => {
        if(!rendered) {
            rendered = true

            const circlePath = MotionPathPlugin.convertToPath(`.circular-carrousel #holder`, false)[0]
            circlePath.id = 'circlePath'
            document.querySelector(`.circular-carrousel svg.circle-svg`).prepend(circlePath)
            gsap.set(items, {
                motionPath: {
                    path: circlePath,
                    align: circlePath,
                    alignOrigin: [0.5, 0.5],
                    end: (i) => i / items.length,
                },
                scale: .6,
            });

            tl = gsap.timeline({ paused: true, reversed: true });

            tl.to(`.circular-carrousel .wrapper`, {
                rotation: 360,
                transformOrigin: "center",
                duration: 1,
                ease: "none",
            });

            tl.to(
                items,
                {
                    rotation: "-=360",
                    transformOrigin: "center",
                    duration: 1,
                    ease: "none",
                },
                0
            );

            tl.to(
                tracker,
                {
                    item: numItems,
                    duration: 1,
                    ease: "none",
                    modifiers: {
                        item(value) {
                            return wrapTracker(numItems - Math.round(value));
                        },
                    },
                },
                0
            );
        }
    }, [itemActive])

    const handleClick = i => {
        let current = tracker.item,
        activeItem = i

        if (i === current) {
            return;
        }

        setItemActive(activeItem)
        
        var diff = current - i;

        if (Math.abs(diff) < numItems / 2) {
            moveWheel(diff * itemStep);
        } else {
            var amt = numItems - Math.abs(diff);

            if (current > i) {
                moveWheel(amt * -itemStep);
            } else {
                moveWheel(amt * itemStep);
            }
        }
    }

    const moveWheel = amount => {
        let progress = tl.progress();
        tl.progress(wrapProgress(snap(tl.progress() + amount)));
        let next = tracker.item;
        tl.progress(progress);
    
        setItemActive(next)
    
        gsap.to(tl, {
            progress: snap(tl.progress() + amount),
            modifiers: {
                progress: wrapProgress,
            },
        });
    }

    const handlePrevButton = () => {
        moveWheel(itemStep)
    }

    const handleNextButton = () => {
        moveWheel(-itemStep)
    }

    return (
        <div className='circular-wrapper'>
            <div className='div-vendas'>
                <img src={titulovendas} alt="" className='vendas'></img>
            </div>
            <div className='div-texto66'><p className='text2'>Observe, a seguir, alguns argumentos que você pode 
usar durante a sua venda.
</p></div>

            <div className='circular-carrousel'>
                <div className='content'>
                    <div className='wrapper'>
                        { data.map((item, index) => {
                            return (
                                <div 
                                    className={`item ${index + 1} ${ (itemActive === index) && `.active` }`} 
                                    key={index}
                                    onClick={_ => handleClick(index)}>
                                    { item.image }
                                </div>
                            )
                        }) }
                        <svg viewBox="0 0 300 300" ref={svgRef} className='circle-svg'>
                            <circle id="holder" ref={circleRef} className='st0' cx="151" cy="151" r="150" />
                        </svg>
                    </div>
                </div>
                <div className='text-area'>
                    <div className='text-item'>
                        <h3>{ data[itemActive].title }: </h3>
                        <p>
                        { data[itemActive].text.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))  }
                        </p>
                    </div>
                    <div className='controls'>
                        <button className='prev' onClick={handlePrevButton}>
                            {/* <span className='web'>&uArr;</span>
                            <span className='mobile'>&lArr;</span> */}

                            <span className='web'><img alt="" src={setaUp}/></span>
                            <span className='mobile'><img alt="" src={setaUp}/></span>
                            
                        </button>
                        <p><span>0{itemActive + 1}</span>/0{totalItems}</p>
                        <button className='next' onClick={handleNextButton}>
                            {/* <span className='web'>&dArr;</span>
                            <span className='mobile'>&rArr;</span> */}

                            <span className='web'><img alt="" src={setaDown}/></span>
                            <span className='mobile'><img alt="" src={setaDown}/></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CircularCarrousel