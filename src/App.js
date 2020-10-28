import React from 'react';
import './styles/App.css';
import './styles/Projects.css';

import Header from './components/Header';
import MainSection from './components/MainSection';
import About from './components/About';
import Badge from './components/Badge';
import Mention from './components/Mention';
import Projects from './components/Projects';
import Contact from './components/Contact';

import front from './assets/badges/005-dashboard interface.svg';
import mobile from './assets/badges/009-mobile app.svg';
import backend from './assets/badges/002-file backup.svg';
import ui from './assets/badges/023-user interface.svg';

import Pokedex from './assets/logos/pokemon.png'
import fifacmo from './assets/logos/icon.png'
import bth from './assets/logos/bth.svg'
import covid from './assets/logos/covid.png'
import erecycle from './assets/logos/erecycle.png'

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <About />
      <section className="App__badges">
        <div className="App__wrapperLines">
          <div className="App__upLine1"></div>
          <div className="App__upLine2"></div>
        </div>

        <div className="App__wrapperLines">
          <div className="App__downLine1"></div>
          <div className="App__downLine2"></div>
        </div>

        <Badge 
          name="Desenvolvimento Web (Front-end)" 
          desc="Faço o desenvolvimento de interfaces gráficas usando o React e bibliotecas relacionadas a ele." 
          logo={front} 
        />

        <Badge 
          name="Desenvolvimento Mobile" 
          desc="Realizei alguns projetos mobile inclusive fazendo api requests usando o React Native." 
          logo={mobile} 
        />

        <Badge 
          name="Desenvolvimento (Back-end)" 
          desc="Tive experiência criando APIs usando o Sequelize e Express.js" 
          logo={backend} 
        />

        <Badge 
          name="Prototipação de projetos (ui)" 
          desc="Tenho bastante interesse nessa área, mas não tenho embasamento teórico, mas gosto de explorar usando o Adobe XD." 
          logo={ui} 
        />
      </section>
      <Mention /> 

      <div className="projects__container">
        <h4 className="projetcts__title">Projetos</h4>
        <div className="projects__projects">
          <Projects name="React Pokedex" image={Pokedex}/>
          <Projects name="FIFACMO" image={fifacmo}/>
          <Projects name="Be The Hero" image={bth}/>
          <Projects name="Covid-19 Tracker" image={covid}/>
          <Projects name="E-Recycle" image={erecycle}/>

          <div className="fixFlexWrap"></div>
          <div className="fixFlexWrap"></div>
          <div className="fixFlexWrap"></div>
          <div className="fixFlexWrap"></div>
        </div>
      </div>

      <Contact />
    </div>
  );
}

export default App;
