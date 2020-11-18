import React from 'react'
import { Row, Col, Image, Container, Jumbotron } from 'react-bootstrap'
import ButtonCom from './Button'
import HeroItem from '../assets/images/Hero.png'
import { Zoom, Fade } from 'react-reveal'

const Hero = () => {
    return (
        <>
            <Jumbotron>
                <Container className='hero__container'>
                    <Row>
                        <Col md={6} className='mt-4'>
                            <Fade left>
                                <h1 style={{ lineHeight:'50px', fontWeight:'bold' }}>Platform Sekolah Online yang Menyenangkan</h1>

                                <p style={{ margin: '30px 0', lineHeight:'30px' }}>Belajar lebih mudah, kapanpun, dimanapun mudah dijangkau hingga kepelosok negeri.</p>

                                <ButtonCom>Mulai Belajar</ButtonCom> 
                            </Fade>
                        </Col>

                        <Col md={6} className='hero_image'>
                            <Zoom delay={200}>
                                <Image src={HeroItem} />
                            </Zoom>
                        </Col>
                   
                    </Row>
                </Container>
            </Jumbotron>
        </>
    )
}

export default Hero
