import React from "react";
import "../styles/skills.css";

const technicalSkills = [
  { group: "Programming", skills: [{ name: "Python", percent: 80 }, { name: "JavaScript", percent: 85 }] },
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

const SkillRow = ({ skill }) => (
  <div className="skill-row">
    <span className="skill-name">{skill.name}</span>
    <div className="skill-bar-container">
      <div className="skill-bar">
        <div className="skill-bar-fill" style={{ width: `${skill.percent}%` }} />
      </div>
      <span className="skill-bar-percent">{skill.percent}%</span>
    </div>
  </div>
);

const Skills = () => (
  <section id="skills" className="section skills-section-page">
    <div className="skills-container">
      <h2 className="skills-title">MY SKILLS</h2>

      {/* Technical Skills */}
      <div className="skills-category">
        <h3 className="skills-category-title">Technical Skills</h3>
        {technicalSkills.map((group) => (
          <div key={group.group} className="skills-group">
            <h4 className="skills-group-title">{group.group}</h4>
            <div className="skills-list">
              {group.skills.map((skill) => (
                <SkillRow key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Soft Skills */}
      <div className="skills-category">
        <h3 className="skills-category-title">Soft Skills</h3>
        <div className="soft-skills-list">
          {softSkills[0].skills.map((skill) => (
            <div key={skill.name} className="soft-skill-item">
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
