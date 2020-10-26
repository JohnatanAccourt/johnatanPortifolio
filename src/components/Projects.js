import React from 'react';
import '../styles/Projects.css';

export default function Projects({image, name}){
    return(
        <div className="projects__project">
            <div className="projects__wrapperImage">
                <img className="projects__image" src={image} alt="project image"/>
            </div>

            <div className="projects__wrapperText">
                <p className="projects__text">{name}</p>
            </div>
        </div>
    )
}