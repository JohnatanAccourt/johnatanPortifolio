import React, { useState } from 'react';
import '../styles/Projects.css';

export default function Projects({image, name}){
    const [modal, setModal] = useState(false);
    // const [modalContent, setModalContent] = useState({
    //     primaryColor: '#0571FF',
    //     secondaryColor: '#091B34',
    //     projectName: name,
    //     projectTecnologies: [],
    //     about: '',
    //     demo: '',
    //     repo: ''
    // });

    // function itemClicked(name, image){
    //     name === 'pokemon' ?
    //     setModalContent()
    // }

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
                    <div className="projects__modalImage">
                        <img src="" alt=""/>
                    </div>
                    <div className="projects__modalDesc">

                    </div>
                </div>
            :
                <></>
            }
        </>
    )
}