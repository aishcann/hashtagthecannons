import './app.scss';
import { useState } from 'react';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';

function App() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="App">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Intro />
    </div>
  );
}

export default App;
