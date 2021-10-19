import React from 'react'
import me from '../assets/me.png';
import cv from '../assets/CVMartaEng.pdf'
function OmMig() {
    return (
        <section  id="about-me-section" className="about-me" >
        <h2 id="who-am-i" className="title-main">Who am I?</h2>
        <div id="aboutme-wrapper">
            <div id="aboutme-box">
                <p id="about-me-css-text">
                    <span className="classtext">.about-me</span> <span className="normaltext">  &#123; <br></br>
                    {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}name: </span> <span className="stringtext"> "Märta Ballardini"</span><span className="normaltext">;</span><br></br>
                    <span className="normaltext">{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}age: </span> <span className="classtext"> 20</span><span className="normaltext">;</span><br></br>
                    <span className="normaltext">{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}lives-in: </span> <span className="stringtext"> "Stockholm, Sweden"</span><span className="normaltext">;</span><br></br>
                    <span className="normaltext">{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}likes-to: </span> <span className="stringtext"> “Hang out with friends and family”</span><span className="normaltext">; <br></br>
                    &#125;</span>
                    <br></br><br></br>
                    <span className="idtext">#education</span> <span className="normaltext"> &#123;  <br></br>
                    {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}school: </span> <span className="stringtext"> "Medieinstitutet"</span><span className="normaltext">;</span><br></br>
                    <span className="normaltext">{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}program: </span> <span className="stringtext"> "Front End Developer"</span><span className="normaltext">;</span><br></br>
                    <span className="normaltext">{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}graduating: </span> <span className="stringtext"> "May 2022"</span><span className="normaltext">; <br></br>
                    &#125;</span>

                    <br></br><br></br>
                    <span className="elementtext">cv</span> <span className="normaltext"> &#123;  <br></br>
                    {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}url: </span> <span className="elementtext"> <a href={cv} target="_blank" rel="noreferrer">$url_for_my_cv</a></span><span className="normaltext">;<br></br>
                    &#125;</span>
                </p>
            </div>
            {/* <div id="text-box">
                <p>
                    My name is Märta Ballardini, i'm twenty years old and live in Stockholm, Sweden.
                    I am studying to become a Front End Developer, and i´m in my second year of the Front End Developer Program at Medieinstitutet which is a vocational school in Stockholm.
                </p>
                <br />
                <p>
                    On my free time i like to hang out with my friends and my boyfriend Simon. I also really like to play with makeup to entertain my creative side.
                </p>
                <br />
                <p> Please have a look at my cv <a href={cv} target="_blank" rel="noreferrer">HERE!</a> </p>
                
                
            </div>   */}
            <img src={me} alt="" />
        </div> 
        
    </section>    
    )
}

export default OmMig;