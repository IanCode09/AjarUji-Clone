import React from 'react'
import { Container } from 'react-bootstrap'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Feature from '../components/Feature'

const HomeScreen = () => {
    return (
        <div>
            <Header />
            <main>
                <Hero />
                <Feature />
            </main>
        </div>
    )
}

export default HomeScreen
