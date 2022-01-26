interface skill {
  name: string;
  rating: number;
}
function Skills() {
  const skills = {
    languages: [
      {
        name: "Typescript",
        rating: 5,
      },
      {
        name: "JavaScript",
        rating: 5,
      },
      {
        name: "HTML",
        rating: 4,
      },
      {
        name: "CSS",
        rating: 4,
      },

      {
        name: "Python",
        rating: 2,
      },
    ],
    frameworks: [
      {
        name: "Next.js",
        rating: 4,
      },
      {
        name: "React JS",
        rating: 4,
      },
      {
        name: "Angular",
        rating: 3,
      },
      {
        name: "Node JS",
        rating: 3,
      },
    ],
    design: [
      {
        name: "Adobe XD",
        rating: 4,
      },
      {
        name: "Figma",
        rating: 3,
      },
      {
        name: "Photoshop",
        rating: 3,
      },
      {
        name: "Illustrator",
        rating: 3,
      },
    ],
    workflow: [
      {
        name: "Git/Github",
        rating: 4,
      },
      {
        name: "VS Code",
        rating: 4,
      },
      {
        name: "Scrum",
        rating: 3,
      },
    ],
  };

  function skillItemHtml(nav: skill[], title: string) {
    return (
      <>
        <h2>{title}</h2>
        {nav.map((item) => (
          <div className="skill-item">
            <span>{item.name}</span> {"\u00A0"}
            <div>
              {[...Array(item.rating)].map(
                (value: undefined, index: number) => (
                  <i className="fas fa-star"></i>
                )
              )}
            </div>
          </div>
        ))}
      </>
    );
  }

  let frameworksHtml = skillItemHtml(
    skills.frameworks,
    "Frameworks & Libraries"
  );
  let languagesHtml = skillItemHtml(skills.languages, "Languages");
  let designHtml = skillItemHtml(skills.design, "Design");
  let workflowHtml = skillItemHtml(skills.workflow, "Workflow");

  return (
    <section id="skills-section" className="skills">
      <h2 id="skills" className="title-main">
        My Skills
      </h2>
      <div className="skills-wrapper">
        <div id="skills-box">
          <div id="skills-info">{frameworksHtml}</div>
          <div id="skills-info">{languagesHtml}</div>
          <div id="skills-info">{designHtml}</div>
          <div id="skills-info">{workflowHtml}</div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
