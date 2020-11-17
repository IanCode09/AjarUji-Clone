import React from 'react'
import { Container } from 'react-bootstrap'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Feature from '../components/Feature'
import Demo from '../components/Demo'
import About from '../components/About'

const HomeScreen = () => {
    return (
        <div>
            <Header />
            <main>
                <Hero />
                <Feature />
                <Demo />
                <About />
            </main>
        </div>
    )
}

export default HomeScreen
