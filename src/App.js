import React from 'react';
import './styles/App.css';

import Header from './components/Header';
import MainSection from './components/MainSection';
// import Badge from 'components/Badge';
// import Mention from 'components/Mention';
// import Projects from 'components/Projects';
// import Contact from 'components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      {/* <div className="App__badges">
        <Badge name="" desc="" logo="" />
      </div>
      <Mention />
      <Projects />
      <Contact /> */}
    </div>
  );
}

export default App;
