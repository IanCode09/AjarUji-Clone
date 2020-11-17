import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Features from '../json/feature'

const Feature = () => {
    return (
        <div className='feature_container'>
            <Container className='text-center'>
                <h3><strong>Manfaat yang Kamu Dapatkan</strong></h3>
                <h5 className='mb-4'>Dapatkan pengalaman belajar terbaik dengan fitur menarik di Ajar uji.</h5>

                <div className='feature_item'>
                    <Row>
                        {Features.map((feature) => (
                            <Col>
                                <Image src={feature.image} />
                                <h5 className='mb-4'><strong>{feature.featureName}</strong></h5>
                                <p>{feature.description}</p>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Feature
