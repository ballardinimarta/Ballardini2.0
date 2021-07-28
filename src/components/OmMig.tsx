import React from 'react'
import mig from './../assets/smink.jpg'
import molly from './../assets/molly.jpg'
import wilma from './../assets/wilma.png'
import midsommar from './../assets/midsommar.jpg'
import simon from './../assets/simon.jpg'
import miriam from './../assets/mirre.jpg'
function OmMig() {
    return (
        <section  id="about-me-section" className="about-me" >
        <h2 id="who-am-i" className="title-main">Who am i?</h2>
        <div id="aboutmewrapper">
            <div id="text-box">
                <p>My name is Märta Ballardini, i'm twenty years old and live in Stockholm, Sweden.
                    I aspire to become a FrontEnd Developer, and i have started the Front End Developer Program at Medieinstitutet.</p><br />
                    <p>On my free time i like to hang out with my friends and especially to be with my boyfriend Simon.</p><br />
                    <p>I really enjoy doing makeup to entertain my creative side, and i have accumulated a large ammount of makeup for a person that for a long time did not have a full time job.</p><br />
                
            </div>
            <div className="pic-gallery-wrapper">
                <div className="pic-gallery">
                    <ul>
                        <div className="img__wrap">
                            <img className="img__img" src={mig} alt="me"/>
                            <p className="img__description">A pic of me.</p>
                        </div>
                        <div className="img__wrap">
                            <img className="img__img" src={molly} alt="molly"/>
                            <p className="img__description">My friend Molly.</p>
                        </div>
                        <div className="img__wrap">
                            <img className="img__img" src={wilma} alt="wilma"/>
                            <p className="img__description">My friend Wilma.</p>
                        </div>
                    </ul>
                    <ul>
                        <div className="img__wrap">
                            <img className="img__img" src={midsommar} alt="midsommer"/>
                            <p className="img__description">Some of my friends celebrating midsummer.</p>
                        </div>
                        <div className="img__wrap">
                            <img className="img__img" src={simon} alt="simon"/>
                            <p className="img__description">My boyfriend Simon.</p>
                        </div>
                        <div className="img__wrap">
                            <img className="img__img" src={miriam} alt="Miriam"/>
                            <p className="img__description">My friend Miriam.</p>
                        </div>
                    </ul>
                </div>
        </div>
        </div>
        
    </section>    
    )
}

export default OmMig;