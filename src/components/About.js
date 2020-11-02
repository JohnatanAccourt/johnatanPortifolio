import React from 'react';
import '../styles/About.css';

export default function About(){
    return(
        <section className="about__container" id='About'>
            <div className="about__wrapper">
                <div className="about__leftLines">
                    <div className="about__leftLine1"></div>
                    <div className="about__leftLine2"></div>
                </div>

                <div className="about__rightLines">
                    <div className="about__rightLine1"></div>
                    <div className="about__rightLine2"></div>
                </div>

                <h2 className="about__title">Um pouco sobre mim:</h2>

                <h3 className="about__text">
                    Falando de características pessoais, eu gosto muito de trabalhar em equipe trocando informações, idéias e adaptando à forma do time trabalhar, gosto sempre de melhorar a cada dia e não me dou por satisfeito pois sempre busco refatorar meus conhecimentos e buscar ser cada vez mais rápido no desenvolvimento, tenho uma cobrança interna bem grande em ser cada vez melhor no dia-a-dia e ser pontual nos compromissos mesmo que tenha que me dedicar fora do horário de trabalho para alcançar a plenitude do projeto.
                </h3>

                <h3 className="about__text about__separator">
                    Tive meu primeiro contato com o desenvolvimento web através do curso que fiz no Senac Largo Treze(2018-2019) chamado Técnico em Informática que abriu minha mente e me deu um horizonte sobre tudo que há hoje na área da tecnologia, desde montagem de microcomputadores, configuração de redes e claro a parte de desenvolvimento.
                </h3>

                <h3 className="about__text">
                    Após o curso tive a convicção do que gostaria de fazer e venho buscando conhecimento sobre desenvolvimento web principalmente sobre Front-end pois ainda estou buscando uma oportunidade no mercado para mostrar que sou capaz de contribuir na composição do time e gerar valor.
                </h3>
            </div>
        </section>
    )
}