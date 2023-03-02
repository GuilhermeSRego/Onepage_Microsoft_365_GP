// Icons
import icon1 from '../assets/images/horizontalAccordion/icon-1.png';
import icon2 from '../assets/images/horizontalAccordion/icon-2.png';
import icon3 from '../assets/images/horizontalAccordion/icon-3.png';
import icon4 from '../assets/images/horizontalAccordion/icon-4.png';

const colors = {
    lightBlue: 'rgba(0, 177, 244, 1)',
    orange: 'rgba(255, 134, 1, 1)',
    red: 'rgba(255, 28, 55, 1)',
    green: 'rgba(154,204,52, 1)',
    yellow: 'rgba(251,212,69, 1)'
}

export const data = [
    {
        orientation: 'left',
        image: icon1,
        title: 'Nativo da nuvem',
        description: 'Funciona em qualquer dispositivo que tenha um navegador web, seja on-line ou off-line.',
        color: colors.green
    },
    {
        orientation: 'left',
        image: icon2,
        title: 'Nativo da nuvem2',
        description: 'Funciona em qualquer dispositivo que tenha um navegador web, seja on-line ou off-line.',
        color: colors.yellow
    },
    {
        orientation: 'right',
        image: icon3,
        title: 'Nativo da nuvem3',
        description: 'Funciona em qualquer dispositivo que tenha um navegador web, seja on-line ou off-line.',
        color: colors.yellow
    },
    {
        orientation: 'right',
        image: icon4,
        title: 'Nativo da nuvem4',
        description: 'Funciona em qualquer dispositivo que tenha um navegador web, seja on-line ou off-line.',
        color: colors.red
    },
]