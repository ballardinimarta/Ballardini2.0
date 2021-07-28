import React from 'react'
import bye from './../assets/bye.png'
function Kontakt() {
    return (
        <section id="contact-section" className="contact" >
            <h2 id="contact" className="title-main">Contact</h2>

            <div className="contactinfo">
                <p>If you would like to contact me, here is my contact information</p>
                <p>Email: <a href="mailto:marta.ballardini@gmail.com" target="_blank" rel="noreferrer">marta.ballardini@gmail.com</a></p>
                <p>Phone: +46 700 623 959</p>
            </div>
            <ul id="socials">
                <li><a href="https://github.com/ballardinimarta" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a></li>
                <li><a href="https://www.linkedin.com/in/m%C3%A4rta-ballardini-403a6a165/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a></li>
            </ul>
            <img src={bye} alt="Goodbye from me"></img>
            <p>Thank u for visiting my website!</p>
        </section>
    )
}

export default Kontakt;
