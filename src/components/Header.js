import React from 'react';
import '../styles/Header.css';
import Johl from '../assets/logos/johl.svg';

import { Link } from 'react-scroll';

export default function Header({scrolledHeader}){
    return(
        <header className={scrolledHeader ? 'header--container' : "header__container"}>
            <div className="header__wrapperLogo">
                <Link
                    activeClass='active'
                    to='Main'
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1000}
                >
                    <img className={scrolledHeader ? 'header--logo' : "header__logo"} src={Johl} alt="logo"/>
                </Link>
            </div>
            <div className="header__buttons">
            <Link
                activeClass='active'
                to='About'
                spy={true}
                smooth={true}
                offset={-60}
                duration={1000}
            >
                <buttom className={scrolledHeader ? 'header--button' : "header__button"} >Sobre mim</buttom>
            </Link>

            <Link
                activeClass='active'
                to='Projects'
                spy={true}
                smooth={true}
                offset={-60}
                duration={1000}
            >
                <buttom className={scrolledHeader ? 'header--button' : "header__button"}>Projetos</buttom>
            </Link>

            <Link
                activeClass='active'
                to='Contact'
                spy={true}
                smooth={true}
                offset={-60}
                duration={1000}
            >
                <buttom className={scrolledHeader ? 'header--button' : "header__button"}>Contato</buttom>
            </Link>


                
            </div>
        </header>
    )
}