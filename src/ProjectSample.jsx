import React from 'react';
import './assets/css/experiencia.css';

const ProjectSample = ({ img, title, subtitle, repo, demo }) => {
    return (
        <div class="experiencia__box">
            <img src={img} alt="" class="experiencia__img" />
            <div class="experiencia__info">
                <h2 class="experiencia__title_proy">{title}</h2>
                <h3 class="experiencia__text">{subtitle}</h3>
                <div class="experiencia__descripcion">
                    <span class="experiencia__repo">
                        <a href={repo}><button class="experiencia__boton--repo">Repo</button></a>
                    </span>
                    <span class="experiencia__demo">
                        <a href={demo}><button class="experiencia__boton--repo">Demo</button></a>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProjectSample;
