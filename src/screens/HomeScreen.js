import React from 'react'
import { Container } from 'react-bootstrap'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Feature from '../components/Feature'
import Demo from '../components/Demo'

const HomeScreen = () => {
    return (
        <div>
            <Header />
            <main>
                <Hero />
                <Feature />
                <Demo />
            </main>
        </div>
    )
}

export default HomeScreen
