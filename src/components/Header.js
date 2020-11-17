import React from 'react'
import { Container, Navbar, Nav, Image } from 'react-bootstrap'
import ButtonCom from './Button'
import Logo from '../assets/images/LogoAjarUji.png'

const Header = () => {
    return (
        <div>
            <Navbar bg="primary" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <Image src={Logo} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#home">Beranda</Nav.Link>
                            <Nav.Link href="#link">Uji Coba</Nav.Link>
                            <Nav.Link href="#link">Fitur</Nav.Link>
                            <Nav.Link href="#link">Berlangganan</Nav.Link>
                            <Nav.Link href="#link">Tentang Kami</Nav.Link>
                            <ButtonCom>Masuk</ButtonCom>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    )
}

export default Header
