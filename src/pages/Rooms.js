import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import RoomsContainer  from '../components/RoomsContainer'
import Footer from '../components/Footer'

export const Rooms = () => {
    return (
        <>
        <Hero hero="roomsHero">
            <Banner title="Our Rooms">
                <Link to="/" className="btn-primary">
                    Return to Home
                    </Link>
            </Banner>
        </Hero>

        <RoomsContainer/>
        <Footer/>
        </>
    )
}


export default Rooms;