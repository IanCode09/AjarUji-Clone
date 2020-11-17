    import React from 'react'
    import { Row, Col, Image } from 'react-bootstrap'
    import subscribes from '../json/subscibeJson'
    
    const Subsribe = () => {
        return (
            <div className='subscribe_container text-center'>
                <h3 className='mb-4'><strong>Penawaran Terbaik</strong></h3>
                <h6 style={{ lineHeight: '30px' }}>Dapatkan penawaran menarik untuk akses tak terhingga belajar dengan Ajar Uji.</h6>

                <div className='subscribe'>
                    <Row className='text-center'>
                        {subscribes.map((subscribe) => (
                            <Col className='subscribe_item'>
                                <Image src={subscribe.img} />
                                <h4><strong>Rp{subscribe.price}/Bulan</strong></h4>
                                <h6><strong>{subscribe.category}</strong></h6>
                                <h6>{subscribe.description}</h6>
                            </Col>
                        ))}
                    </Row>
                </div>
        </div>
        )
    }
    
    export default Subsribe
    