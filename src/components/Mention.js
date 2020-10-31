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
                <h2 className="mention__title">Elon Musk: “Se algo é importante o suficiente, você deve tentar. Mesmo se o resultado provável for o fracasso.”</h2>
                <p className="mention__text">
                Tenho projetos que não vingaram mas sei da importância que eles tiveram no crescimento mental de não desistir e ir para a próxima, talvez no próximo seja encontrado a solução para o anterior. 
                </p>
            </div>

            <div className="mention__mention">
                <h2 className="mention__title">Mark Zuckerberg: “Você só precisa começar“</h2>
                <p className="mention__text">Muitas vezes vemos um grande desafio à nossa frente e podemos pensar que é muito difícil, mas nunca vamos saber se somos capazes de passar por ela se ao menos começarmos.</p>
            </div>
        </div>
    )
}