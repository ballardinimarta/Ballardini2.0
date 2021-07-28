import React from 'react'

function CV() {
    return (
        <section id="work-section" >
            <h2 id="CV" className="title-main">CV</h2>
            <div id="workwrapper">
                <div id="jobs">  
                    <h3 className="big">Jobs</h3>
        
                    <div className="job">
                        <strong className="work-title job-title">Internship</strong>
                        <em className="workplace job-company">Internet Stiftelsen</em>
                        <p className="work-description job-description">A paid internship, where i used python for visualization of DNS-data. <br></br> Full time</p>
                        <p className="time">From January 2020 To May 2020</p>
                    </div>
                    <div className="job">
                        <strong className="work-title job-title">Bartender/Runner</strong>
                        <em className="workplace job-company">Ingmarsö Krog</em>
                        <p className="work-description job-description"> Worked 50% in the bar and 50% in the dishes, i also helped to go out with food and drinks.<br></br> Full time</p>
                        <p className="time">From June 2020 To August 2020</p>
                    </div>      
                    
                    <div className="job">
                        <strong className="work-title job-title">Store clerk</strong>
                        <em className="workplace job-company">Pressbyrån Slussen</em>
                        <p className="work-description job-description">Opened and closed the store by my self, and worked in the register. <br></br>  Full time</p>
                        <p className="time">From August 2019 To January 2020</p>
                    </div>
                </div>
                <div id="schools">
                    <h3 className="work-title big">Education</h3>
                    <div className="school">
                        <strong className="work-title school-title">Vocational university</strong>
                        <em className="workplace school-company">Medieinstitutet</em>
                        <p className="work-description school-description">Studying the program Front End Developer at Medieinstitutet.</p>
                        <p className="time">From September 2020 to June 2022</p>
                    </div>
                    <div className="school">
                        <strong className="work-title school-title">Online Courses</strong>
                        <em className="workplace school-company">Udemy.com</em>
                        <p className="work-description school-description">Finished online courses in HTML, css and javascript</p>
                        <p className="time">May 2020</p>
                    </div>
                    <div className="school">
                        <strong className="work-title school-title">High School</strong>
                        <em className="workplace school-company">Thorén Innovation School, Stockholm</em>
                        <p className="work-description school-description">A High School diploma in information and media technology</p>
                        <p className="time">From August 2016 To June 2019</p>
                    </div>
                </div>
                <div id="skills">
                        <h3 className="work-title big">Other skills</h3>
                        <div className="skill">
                            <strong className="work-title skill-title">Scholarship</strong>
                            <p className="work-description skill-description">I won a scholarship for the best <em>Gymnasiearbete</em> at my high school.</p>
                        </div>
                        <div className="skill">
                            <strong className="work-title skill-title">Knowledge</strong>
                            <p className="work-description skill-description">I have knowledge in programming languages as <em>HTML, CSS, JavaScript</em> and <em>Python.</em> I also know <em>jQuery, NodeJS, Git</em> and <em>Agile workflow (Scrum).</em></p>
                        </div>
                        <div className="skill">
                            <strong className="work-title skill-title">languages</strong>
                            <p className="work-description skill-description">I speak fluent Swedish and English, and can also speak some Spanish.</p>
                        </div>
                </div>
            </div>
            
        </section>
    )
}

export default CV;
