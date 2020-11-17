import React from 'react'
import { Container, Col, Image } from 'react-bootstrap'
import Carousel from 'react-elastic-carousel'
import profiles from '../json/testimoniJson'

const Testimoni = () => {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 1, itemsToScroll: 2 },
        { width: 768, itemsToShow: 2 },
        { width: 1200, itemsToShow: 2 }
    ];

    return (
        <div className='testimoni_container text-center'>
            <Container>
                <h3><strong>Mengapa Memilih Ajar Uji?</strong></h3>
                <h6 style={{ lineHeight: '30px' }}>Ajar Uji memiliki banyak keunggulan yang menjadi pilihan terbaik. Berikut kata mereka yang telah bergabung <br/>dan belajar dengan Ajar Uji.</h6>

                <Carousel breakPoints={breakPoints}>
                    {profiles.map((profile) => (
                        <Col className='testimoni_item'>
                            <Image src={profile.img} />
                            <h4><strong>{profile.name}</strong></h4>
                            <h6 style={{ color: '#494fca' }}><strong>{profile.schooll}</strong></h6>
                            <h6>{profile.review}</h6>
                        </Col>
                    ))}
                </Carousel>
                   

                {/* <div className='testimoni'>
                    <Row className='text-center'>
                        <Carousel breakPoints={breakPoints}>
                            {profiles.map((profile) => (
                                <Col className='testimoni_item'>
                                    <Image src={profile.img} />
                                    <h4><strong>{profile.name}</strong></h4>
                                    <h6 style={{ color: '#494fca' }}><strong>{profile.schooll}</strong></h6>
                                    <h6>{profile.review}</h6>
                                </Col>
                            ))}
                        </Carousel>
                    </Row>
                </div> */}
            </Container>
        </div>
    )
}

export default Testimoni
