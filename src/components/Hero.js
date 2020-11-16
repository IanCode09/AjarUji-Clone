import React from 'react'
import { Row, Col, Image, Container, Button } from 'react-bootstrap'
import HeroImage from '../assets/images/Hero.png'

const Hero = () => {
    return (
        <div className='hero__container'>
            <Container>
                <Row>
                    <Col md={6} className='mt-4'>
                        <h1>Platform Sekolah Online yang Menyenangkan</h1>

                        <p style={{ marginTop: '20px' }}>Belajar lebih mudah, kapanpun, dimanapun mudah dijangkau hingga kepelosok negeri.</p>

                        <Button style={{ marginTop:'20px' }}>
                            Mulai Belajar
                        </Button>
                    </Col>

                    <Col md={6} className='hero_image'>
                        <Image src={HeroImage} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Hero
