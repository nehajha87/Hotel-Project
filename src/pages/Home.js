import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'
import Footer from '../components/Footer'
// import Button from '../components/StyledHero';

export default function Home() {
    return (
        <>
        < Hero>
            <Banner title="luxurious rooms" subtitle="deluxe rooms starting at &#x20B9; 9999">
                <Link to="/rooms" className="btn-primary">
                    Our Rooms
                </Link>
            </Banner>
        </Hero>
        <Services/>
        <FeaturedRooms/>
        <Footer/>
        {/* <Button>jbjhbgh</Button> */}
        </>
    );
}


