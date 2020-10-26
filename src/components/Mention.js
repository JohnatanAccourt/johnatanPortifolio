import React from 'react';
import '../styles/Mention.css';

export default function Mention(){
    return(
        <div className="mention__container">
            <div className="mention__leftLines">
                <div className="mention__leftLine1"></div>
                <div className="mention__leftLine2"></div>
            </div>

            <div className="mention__rightLines">
                <div className="mention__rightLine1"></div>
                <div className="mention__rightLine2"></div>
            </div>

            <div className="mention__mention">
                <h2 className="mention__title">Tio Ben: "com muitos poderes vem grandes responsabilidades"</h2>
                <p className="mention__text">
                Tenho sempre vontade de aprender e ouvir o que os mais experientes tem para me passar, sendo assim, me tornando cada vez melhor!
                </p>
            </div>

            <div className="mention__mention">
                <h2 className="mention__title">Mark Zuckerberg: "Você só precisa começar"</h2>
                <p className="mention__text">Muitas vezes vemos um grande desafio à nossa frente e podemos pensar que é alto demais mas nunca vamos saber se somos capazes de passar por ela se ao menos começarmos. </p>
            </div>
        </div>
    )
}