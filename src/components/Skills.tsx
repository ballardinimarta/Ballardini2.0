import React, { useEffect, useState } from 'react'
interface skill {
    name: string,
    rating: number
}
function Skills() {
    const skills = {
        languages: [
            {
                name: "HTML",
                rating: 4
            },
            {
                name: "CSS",
                rating: 4
            },
            {
                name: "JavaScript",
                rating: 5
            },
            {
                name: "Python",
                rating: 2
            },
        ],
        frameworks: [
            {
                name: "React JS",
                rating: 4
            },
            {
                name: "Angular",
                rating: 3
            },
            {
                name: "jQuery",
                rating: 4
            },
            {
                name: "Node JS",
                rating: 3
            },

        ],
        design: [
            {
                name: "Adobe XD",
                rating: 4
            },
            {
                name: "Figma",
                rating: 3
            },
            {
                name: "Photoshop",
                rating: 3
            },
            {
                name: "Illustrator",
                rating: 3
            }

        ],
        workflow:[
            {
                name: "Git/Github",
                rating: 4
            },
            {
                name: "Scrum",
                rating: 3
            },
            {
                name: "VS Code",
                rating: 4
            },

        ]
    }
    const [navItem, setNavItem] = useState("languages")
    const [skillsInfo, setSkillsInfo] = useState<any>()
    function skillItemHtml (nav: skill[], title: string) {
        setSkillsInfo(
            <>
            <h2>{title}</h2> 
       { nav.map( (item) => (
            
            <div className="skill-item">
                
                <span>{item.name}</span> {'\u00A0'}
                <div>
                {[...Array(item.rating),
                    ].map((value: undefined, index: number) => (
                        <i className="fas fa-star"></i>
                    ))}
                </div>
                
                
            </div>
            
        ))}
        </>

        )
    }
    function toggleinfo () {
        if(navItem === "languages") {
           skillItemHtml(skills.languages, "Languages")
        } else if(navItem === "frameworks") {
            skillItemHtml(skills.frameworks, "Frameworks & Libraries")
        }else if(navItem === "design") {
            skillItemHtml(skills.design, "Design")
        }else if(navItem === "workflow") {
            skillItemHtml(skills.workflow, "Workflow")
        }
    }
    useEffect(() => {
        toggleinfo();
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [navItem])
    
    return (
        <section  id="skills-section" className="skills" >
            <h2 id="skills" className="title-main">My Skills</h2>
        <div className="skills-wrapper">
            <div id="skills-box">
                <div id="skills-nav">
                    <div className="skills-nav-item" onClick={() => setNavItem("languages")}><span>Languages</span></div>
                    <div className="skills-nav-item" onClick={() => setNavItem("frameworks")}><span>Frameworks & Libraries</span></div>
                    <div className="skills-nav-item" onClick={() => setNavItem("design")}><span>Design</span></div>
                    <div className="skills-nav-item" onClick={() => setNavItem("workflow")}><span>Workflow</span></div>
                </div>
                <div id="skills-info">
                    {skillsInfo}
                </div>
            </div>

            {/* <div className="skills-container">
                <i style={{'color': '#e34f26'}} className="fab fa-html5"></i>
                <i style={{'color': '#1472B6'}} className="fab fa-css3-alt"></i>
                <i style={{'color': '#f7df1e'}} className="fab fa-js"></i>
                <i style={{'color': '#00d8ff'}} className="fab fa-react"></i>
                <i style={{'color': '#215732'}} className="fab fa-node"></i>
                <i style={{'color': '#b52e31'}} className="fab fa-angular"></i>
                <i style={{'color': '#CE679B'}} className="fab fa-sass"></i>
                <i style={{'color': '#4584b6'}} className="fab fa-python"></i>
                <i style={{'color': '#F05133'}} className="fab fa-git-alt"></i>
            </div> */}
        </div>
        </section>
    )
}

export default Skills
