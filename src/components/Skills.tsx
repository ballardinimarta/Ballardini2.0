import React from 'react'
function Skills() {
  
    return (
        <section  id="skills-section" className="skills" >
            <h2 id="skills" className="title-main">My Skills</h2>
        <div className="skills-wrapper">
            <div className="skills-container">
                <i style={{'color': '#e34f26'}} className="fab fa-html5"></i>
                <i style={{'color': '#1472B6'}} className="fab fa-css3-alt"></i>
                <i style={{'color': '#f7df1e'}} className="fab fa-js"></i>
                <i style={{'color': '#00d8ff'}} className="fab fa-react"></i>
                <i style={{'color': '#215732'}} className="fab fa-node"></i>
                <i style={{'color': '#b52e31'}} className="fab fa-angular"></i>
                <i style={{'color': '#CE679B'}} className="fab fa-sass"></i>
                <i style={{'color': '#4584b6'}} className="fab fa-python"></i>
                <i style={{'color': '#F05133'}} className="fab fa-git-alt"></i>
            </div>
        </div>
        </section>
    )
}

export default Skills
