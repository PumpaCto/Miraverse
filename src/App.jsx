import React, { useState } from 'react';
import Landing from './components/Landing';
import MainSite from './components/MainSite';
import './styles/animations.css';

const App = () => {
  const [entered, setEntered] = useState(false);

  return (
    <>
      {entered ? <MainSite /> : <Landing onEnter={() => setEntered(true)} />}
    </>
  );
};

export default App;
