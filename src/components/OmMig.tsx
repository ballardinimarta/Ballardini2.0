import React from 'react'
import me from '../assets/me.png';
import cv from '../assets/CVMartaEng.pdf'
function OmMig() {
    return (
        <section  id="about-me-section" className="about-me" >
        <h2 id="who-am-i" className="title-main">Who am i?</h2>
        <div id="aboutme-wrapper">
            <div id="text-box">
                <p>
                    My name is Märta Ballardini, i'm twenty years old and live in Stockholm, Sweden.
                    I am studying to become a Front End Developer, and i´m in my second year of the Front End Developer Program at Medieinstitutet which is a vocational school in Stockholm.
                </p>
                <br />
                <p>
                    On my free time i like to hang out with my friends and my boyfriend Simon. I also really like to play with makeup to entertain my creative side.
                </p>
                <br />
                <p> Please have a look at my cv <a href={cv} target="_blank">HERE!</a> </p>
                
                
            </div>  
            <img src={me} alt="" />
        </div> 
        
    </section>    
    )
}

export default OmMig;