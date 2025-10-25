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
  <div className="skills-card-col">
    {groups.map((group) => (
      <div className="skills-card-group" key={group.group}>
        <h3 className="skills-group-heading">{group.group}</h3>
        {group.skills.map((skill) => (
          <div className="skills-bar-row" key={skill.name}>
            <span className="skills-bar-label">{skill.name}</span>
            <div className="skills-bar">
              <div
                className="skills-bar-fill"
                style={{ width: `${skill.percent}%` }}
              />
            </div>
            <span className="skills-bar-percent">{skill.percent}%</span>
          </div>
        ))}
      </div>
    ))}
  </div>
);

const Skills = () => (
  // <section className="skills-skills-page">
    <section id="skills" className="section skills-section-page">
    <div className="skills-card-container">
      <h2 className="skills-card-title">MY SKILLS</h2>

      {/* Technical Skills Section */}
      <div className="skills-section">
        <h2 className="skills-section-title">Technical Skills</h2>
        <div className="skills-card-rows">
          <CardColumn groups={technicalSkills.slice(0, 3)} />
          <CardColumn groups={technicalSkills.slice(3)} />
        </div>
      </div>

      {/* Soft Skills Section */}
      <div className="skills-section soft-skills-section">
        <h2 className="skills-section-title">Soft Skills</h2>
        <div className="skills-card-rows">
          <CardColumn groups={softSkills} />
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
