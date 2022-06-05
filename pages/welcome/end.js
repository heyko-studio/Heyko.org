import React from "react";
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import Link from 'next/link'

function Welcome() {
    return(
        <div id="test" className="Welcome_End Test"> 
            <Navbar/>
            <h1 className="Title_2">Thank you 💖</h1>
            <h2 className="Subtitle_2">Congratulations, you have completed your registration :D</h2>
            <Link href="/profile"><button style={{marginLeft: '40px'}} className="button view">Go to profile</button></Link>
            <Footer/>
        </div>
    )
}

export default Welcome