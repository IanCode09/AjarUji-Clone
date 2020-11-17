import React from 'react'
import { Container, Navbar, Nav, Image } from 'react-bootstrap'
import ButtonCom from './Button'
import Logo from '../assets/images/LogoAjarUji.png'

const Header = () => {
    return (
        <div>
            <Navbar bg="primary" expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        <Image src={Logo} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/">Beranda</Nav.Link>
                            <Nav.Link href="/ujicoba">Uji Coba</Nav.Link>
                            <Nav.Link href="/fitur">Fitur</Nav.Link>
                            <Nav.Link href="/berlangganan">Berlangganan</Nav.Link>
                            <Nav.Link href="/tentangkami">Tentang Kami</Nav.Link>
                            <ButtonCom>Masuk</ButtonCom>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    )
}

export default Header
