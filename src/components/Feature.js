import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Features from '../json/feature'

const Feature = () => {
    return (
        <div className='feature_container'>
            <Container className='text-center'>
                <h2>Manfaat yang Kamu Dapatkan</h2>
                <h5 className='mt-4'>Dapatkan pengalaman belajar terbaik dengan fitur menarik di Ajar uji.</h5>

                <Row>
                    {Features.map((feature) => (
                        <Col>
                            <Image src={feature.image} />
                            <h5><strong>{feature.featureName}</strong></h5>
                            <p>{feature.description}</p>
                        </Col>
                    ))}
                        


                </Row>

            </Container>
        </div>
    )
}

export default Feature
