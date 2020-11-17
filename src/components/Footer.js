import React from 'react'
import { Row, Col, Container, Image } from 'react-bootstrap'
import Logo from '../assets/images/LogoAjarUji.png'
import Mail from '../assets/images/mail.png'
import Instagram from '../assets/images/instagram.png'
import Whatsapp from '../assets/images/whatsapp.png'

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col md={4} className='footer_logo'>
                        <Image src={Logo} />
                    </Col>

                    <Col md={4}>
                        <h4>Address</h4>
                        <p>Jl. Warung Buncit Raya No.40D, RT.1/ RW.2, Duren Tiga, Kec. Pancoran, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta, 12760</p>
                    </Col>

                    <Col md={2}>
                        <h4>About Us</h4>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">Privacy Policy</a></li>
                        </ul>
                    </Col>

                    <Col md={2}>
                        <h4>Contact</h4>
                        <ul>
                            <li>
                                <Image src={Mail} style={{ width: '20px', marginRight: '4px' }} />
                                <a href="#">info@ajaruji.com</a>
                            </li>

                            <li>
                                <Image src={Instagram} style={{ width: '20px', marginRight: '4px' }} />
                                <a href="#">ajaruji</a>
                            </li>

                            <li>
                                <Image src={Whatsapp} style={{ width: '20px', marginRight: '4px' }} />
                                <a href="#">0812-1314-1516</a>
                            </li>
                        </ul>
                    </Col>
                </Row>

                <h6>© Copyright Ajar Uji - All right reserved</h6>
            </Container>
        </footer>
    )
}

export default Footer
