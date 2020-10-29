import React from 'react';
import '../styles/MainSection.css';

import me from '../assets/me/me.png';

export default function MainSection(){
    return(
        <section className="mainSection__container" id='Main'>
            <div className="mainSection__johlImg">
                <div className="mainSection__column">
                    <img className="mainSection__img" src={me} alt="Johnatan"/>
                </div>
            </div>

            <div className="mainSection__johlInfo">
                <h4 className="mainSection__introduction">Olá eu sou,</h4>
                <h2 className="mainSection__name">Johnatan Accourt Santos</h2>
                <h1 className="mainSection__profession">Front-end Developer Jr</h1>
            </div>
        </section>
    )
}