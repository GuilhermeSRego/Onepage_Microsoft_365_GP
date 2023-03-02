import React from 'react'
import './index.css'

// Components
import Section from '../../components/Section';
import Carrousel from '../../components/Sections-Components/Carrousel';
import Container from '../../components/Container';
import Circulargoogle from '../../components/Sections-Components/CircularCarrouselGoogle';

import Logo from '../../components/Sections-Components/Logo';
import CircularCarrousel from '../../components/Sections-Components/CircularCarrousel';
import SaibaMais from '../../components/Sections-Components/SaibaMais';

import VerticalAccordion from '../../components/Sections-Components/VerticalAccordion';
import TabViewWithImage from '../../components/Sections-Components/TabViewWithImage';
import ImageWithText from   '../../components/Sections-Components/ImageWithText';

// Backgrounds
import bg1 from '../../assets/images/bg-1.png'
import mulher from '../../assets/images/mulher.png'

import bgMan from '../../assets/images/bg-man.png'
import assinatura from '../../assets/images/bg-assinatura.png'
import invert from '../../assets/images/bg-invert.png'



import bgAsian3 from '../../assets/images/bg-asian3.png'
// Images

// retranca
import retrancaImg from '../../assets/images/logo/retranca.png'

// assinatura (final)
import sign from '../../assets/images/logo/sign.png'

const Home = () => {

    return (
        <>
            <img src={retrancaImg} alt="" className="retranca" />
            <Section bg={bg1}  id="start" customClass='wp-capa' >
                <Container>
                    <Logo />
                </Container>
            </Section>
            <Section bg={ bgMan } id="saiba-mais"  customClass='wp-sm' >
                <Container>
                    <SaibaMais />
                </Container>
            </Section>
            <Section bg={bgAsian3}  bgOrientation='center top' id="accordion" customClass='wp-asian' >
                <Container>
                    <VerticalAccordion />
                    <TabViewWithImage />
                    <Carrousel />
                </Container>
            </Section>
            <Section bg={mulher}  id="carrousel" >
                
                  <ImageWithText />  
                
            </Section>
            
            

            <Section bg={invert} id="circular-carrousel">
                <Container>
                    <Circulargoogle />
                </Container>
            </Section>

            
            <Section bg={assinatura} >
                <Container>
                    <div  className="sign-area">
                        <img src={ sign } alt="" />
                    </div>
                </Container>
            </Section>
        </>
    )
}

export default Home