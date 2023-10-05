import React, { useState, useEffect } from 'react';
import './App.css';

import Card from './Cards/diamond';

function App() {

  return (
    <>
      <h1>solitaire</h1>
      <Card id={"s1"} number={2} />
    </>
  );
}

export default App;
