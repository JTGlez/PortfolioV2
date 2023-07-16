import React from 'react';
import SkillCard from './SkillCard';
import './assets/css/skills.css';

const Skills = ({ skills, title }) => {
    return (
        <React.Fragment>
        <h2 className="skills__title__pc">{title}</h2>
        <section className="skills" id="skills">
            <h2 className="skills__title">{title}</h2>
            <div className="skills__stack">
            {skills.map(skill => (
                <SkillCard img={skill.img} title={skill.title} subtitle={skill.subtitle} />
            ))}
            </div>
        </section>
        </React.Fragment>
    );
    };

export default Skills;
