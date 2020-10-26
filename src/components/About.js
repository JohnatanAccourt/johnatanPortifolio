import React from 'react';
import '../styles/About.css';

export default function About(){
    return(
        <section className="about__container">
            <div className="about__wrapper">
                <div className="about__leftLines">
                    <div className="about__leftLine1"></div>
                    <div className="about__leftLine2"></div>
                </div>

                <div className="about__rightLines">
                    <div className="about__rightLine1"></div>
                    <div className="about__rightLine2"></div>
                </div>

                <h2 className="about__title">Sobre Mim:</h2>

                <h3 className="about__text">
                    Falando de características pessoais, eu gosto muito de trabalhar em equipe e também de poder ajudar e também ser ajudado, gosto sempre de me desenvolver e não me dou por satisfeito pois acredito que sempre dá pra melhorar, tenho uma cobrança interna bem grande em ser cada vez melhor no dia-a-dia e ser pontual nos compromissos mesmo que tenha que me dedicar fora do horário de trabalho.
                </h3>

                <h3 className="about__text about__separator">
                    Tive meu primeiro contato com o desenvolvimento web através do curso que fiz no Senac Largo Treze(2018) que abriu minha mente e me deu um horizonte sobre tudo que há hoje na área da tecnologia, desde montagem de microcomputadores, configuração de redes e claro a parte de desenvolvimento.
                </h3>

                <h3 className="about__text">
                    Após o curso tive a convicção do que eu queria ser e busquei e continuo buscando conhecimento sobre desenvolvimento web principalmente sobre front-end e venho buscando uma oportunidade no mercado para mostrar que sou capaz de contribuir no crescimento e desenvolvimento para o mercado.
                </h3>
            </div>
        </section>
    )
}