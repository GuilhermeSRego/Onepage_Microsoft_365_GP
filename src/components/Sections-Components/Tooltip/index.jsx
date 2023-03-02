import { useState } from 'react'
import { Player } from 'video-react'
import 'video-react/dist/video-react.css'

import { Tooltip as TooltipElement } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import './styles.css'
import videoSource from '../../../assets/videos/example.mp4'


const tooltipConfigs = {
    float: false,
    class: 'personal-tooltip',
    clickable: true,
    // delayHide: 10000
}

const dataTooltip = [
    {
        title: 'Title',
        paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi minus, perferendis deleniti dolorem odit, dolorum rem nostrum, similique voluptatibus repellat molestias possimus asperiores? Recusandae, et! Voluptatum earum sint quod harum.'
    }
]

const Tooltip = () => {
    const [anchorId, setAnchorId] = useState('tooltip-1')
    const [isOpen, setIsOpen] = useState(false)

    const handleTooltipClose = () => setIsOpen(false)

    return (
        <div className="tooltip-wrapper">
            <div className="button-with-text">
                <button id="tooltip-1"
                    onMouseEnter={() => {
                        !isOpen && setIsOpen(true)
                        setAnchorId('tooltip-1')
                    }}
                ><span>+</span></button>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus officia mollitia sed dolorum minima repellat, magni porro dolor, 
                    vitae perspiciatis eligendi nostrum. Corrupti eaque excepturi nihil totam blanditiis, molestias cum.
                </p>
            </div>
            <Player src={ videoSource } />
            <div className="button-with-text">
                <button id="tooltip-2"
                    onMouseEnter={() => {
                        !isOpen && setIsOpen(true)
                        setAnchorId('tooltip-2')
                    }}
                ><span>+</span></button>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus officia mollitia sed dolorum minima repellat, magni porro dolor, 
                    vitae perspiciatis eligendi nostrum. Corrupti eaque excepturi nihil totam blanditiis, molestias cum.
                </p>
            </div>
            <TooltipElement 
                anchorId={ anchorId }
                isOpen={ isOpen }
                float={ tooltipConfigs.float }
                className={ tooltipConfigs.class }
                clickable={ tooltipConfigs.clickable }
                delayHide={ tooltipConfigs.delayHide }
                    >
                <h6>{ dataTooltip[0].title }</h6>
                <p>{ dataTooltip[0].paragraph }</p>
                <button onClick={handleTooltipClose}>fechar</button>
            </TooltipElement>
        </div>
    )
}

export default Tooltip