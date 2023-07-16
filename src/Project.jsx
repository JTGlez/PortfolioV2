import React from 'react';
import ProjectSample from './ProjectSample';
import './assets/css/experiencia.css';

const Project = ({projects}) => {
    return (
        <React.Fragment>
            <section className="experiencia" id = "Projects">
            <h2 className="experiencia__title">Projects</h2>
            {projects.map(project => (
                <ProjectSample 
                img={project.img} 
                title={project.title} 
                subtitle={project.subtitle} 
                repo = {project.repo} 
                demo = {project.demo} />
            ))}
            </section>
        
        </React.Fragment>
    );
    };

export default Project;
