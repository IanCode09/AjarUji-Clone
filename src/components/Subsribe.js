    import React from 'react'
    import { Row, Col, Image, Container } from 'react-bootstrap'
    import subscribes from '../json/subscibeJson'
    import DiscountImage from '../assets/images/Groupdisc.png'
    
    const Subsribe = () => {
        return (
            <Container>
                <div className='subscribe_container text-center'>
                    <h3 className='mb-4'><strong>Penawaran Terbaik</strong></h3>
                    <h6 style={{ lineHeight: '30px' }}>Dapatkan penawaran menarik untuk akses tak terhingga belajar dengan Ajar Uji.</h6>

                    <div className='subscribe'>
                        <Row className='text-center'>
                            {subscribes.map((subscribe) => (
                                <Col className='subscribe_item'>
                                    <div className='subscribe_list'>
                                        <Image src={subscribe.img} />
                                        <h4><strong>Rp{subscribe.price}/<span style={{ fontSize: '15px' }}>{subscribe.duration}</span></strong></h4>
                                        <h6><strong>{subscribe.category}</strong></h6>
                                        <h6>{subscribe.description}</h6>
                                    </div>

                                    <div className='discountImg'>
                                        {subscribe.isDiscount ? <Image src={DiscountImage} />  : null}
                                    </div>

                                    
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
            </Container>
        )
    }
    
    export default Subsribe
    