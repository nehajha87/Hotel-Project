import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
// import Footer from '../components/Footer'
function Error() {
    return (
        <>
       <Hero>
            <Banner title="404" subtitle="Page Not Found Here">
                <Link to="/" className="btn-primary">
                    Return to home
                    </Link>
            </Banner>
        </Hero>
        {/* <Footer/> */}
        </>
    )
}

export default Error
