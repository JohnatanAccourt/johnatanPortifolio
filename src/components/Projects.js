import React, { useState } from 'react';

import VisibilityIcon from '@material-ui/icons/Visibility';
import CodeIcon from '@material-ui/icons/Code';

import '../styles/Projects.css';

export default function Projects({image, name, tecnologies, about, description, demo, repo, }){
    const [modal, setModal] = useState(false);

    return(
        <>
            <div className="projects__project" onClick={() => [setModal(true)] }>
                <div className="projects__wrapperImage">
                    <img className="projects__image" src={image} alt="project"/>
                </div>

                <div className="projects__wrapperText">
                    <p className="projects__text">{name}</p>
                </div>

            </div>
            {modal === true ?
                <div className="projects__modal">
                    <buttom className="projects__close" onClick={() => setModal(false)}>x</buttom>
                    <div className="projects__modalDescription">
                        <h1 className="projects__modalTitle">{name}</h1>

                        <div className="projects__modalTecnologies">
                            {tecnologies.map((index, count) => {
                                return (
                                    <p key={count} className="projects__modalTecnologie">{index}</p>
                                )
                            })}
                        </div>

                        <h3 className="projects__modalAboutTitle">Sobre o projeto</h3>

                        <p className="projects__modalAbout">
                            {about}
                        </p>

                        <p className="projects__modalAbout">
                            {description}
                        </p>

                        <div className="projects__modalLinks">
                            <div className="projects__modalWrapperLink">
                                <CodeIcon styles={{color: '#001B1C', fontSize: 10}} />
                                <a className="projects__modalLink" href={demo}>Código</a>
                            </div>

                            <div className="projects__modalWrapperLink">
                                <VisibilityIcon styles={{color: '#001B1C', fontSize: 10}} />
                                <a className="projects__modalLink" href={demo}>Demo</a>
                            </div>
                        </div>
                    </div>
                    <div className="projects__modalWrapperImage">
                        <img className="projects__modalImage" src={image} alt="logo"/>
                    </div>
                </div>
            :
                <></>
            }
        </>
    )
}