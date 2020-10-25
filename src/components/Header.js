import React from 'react';
import '../styles/Header.css';
import Johl from '../assets/logos/johl.svg';

export default function Header(){
    return(
        <header className="header__container">
            <div className="header__wrapperLogo">
                <img className="header__johl" src={Johl} alt="logo"/>
            </div>
            <div className="header__buttons">
                <buttom className="header__button">Sobre mim</buttom>
                <buttom className="header__button">Projetos</buttom>
                <buttom className="header__button">Contato</buttom>
            </div>
        </header>
    )
}