import React from "react";
import "../styles/skills.css";

const technicalSkills = [
  { group: "Programming", skills: [{ name: "Python", percent: 80 }] },
  {
    group: "Frontend",
    skills: [
      { name: "HTML", percent: 90 },
      { name: "CSS", percent: 90 },
      { name: "React", percent: 85 }
    ]
  },
  {
    group: "Backend",
    skills: [
      { name: "Node.js", percent: 80 },
      { name: "Express.js", percent: 75 }
    ]
  },
  {
    group: "Database",
    skills: [
      { name: "MongoDB", percent: 75 },
      { name: "MySQL", percent: 70 }
    ]
  },
  {
    group: "Tools",
    skills: [
      { name: "Git", percent: 90 },
      { name: "GitHub", percent: 90 },
      { name: "Vercel", percent: 80 },
      { name: "Render", percent: 80 },
      { name: "Microsoft Office Suite", percent: 85 }
    ]
  }
];

const softSkills = [
  {
    group: "Soft Skills",
    skills: [
      { name: "Problem Solving", percent: 95 },
      { name: "Communication", percent: 90 },
      { name: "Team Leadership", percent: 87 },
      { name: "Adaptability", percent: 85 },
      { name: "Fast Learner", percent: 90 }
    ]
  }
];

const CardColumn = ({ groups }) => (
  <div className="portfolio-skills__column">
    {groups.map((group) => (
      <div className="portfolio-skills__group" key={group.group}>
        <h3 className="portfolio-skills__group-title">{group.group}</h3>
        {group.skills.map((skill) => (
          <div className="portfolio-skills__item" key={skill.name}>
            <span className="portfolio-skills__label">{skill.name}</span>
            <div className="portfolio-skills__progress">
              <div
                className="portfolio-skills__progress-fill"
                style={{ width: `${skill.percent}%` }}
              />
            </div>
            <span className="portfolio-skills__percent">{skill.percent}%</span>
          </div>
        ))}
      </div>
    ))}
  </div>
);

const Skills = () => (
  <section id="skills" className="portfolio-skills">
    <div className="portfolio-skills__container">
      <h2 className="portfolio-skills__main-title">MY SKILLS</h2>

      {/* Technical Skills Section */}
      <div className="portfolio-skills__section">
        <h2 className="portfolio-skills__section-title">Technical Skills</h2>
        <div className="portfolio-skills__columns">
          <CardColumn groups={technicalSkills.slice(0, 3)} />
          <CardColumn groups={technicalSkills.slice(3)} />
        </div>
      </div>

      {/* Soft Skills Section */}
      <div className="portfolio-skills__section portfolio-skills__section--soft">
        <h2 className="portfolio-skills__section-title">Soft Skills</h2>
        <div className="portfolio-skills__columns">
          <CardColumn groups={softSkills} />
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
