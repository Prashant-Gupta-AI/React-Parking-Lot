import React, { useState } from 'react';
import './App.css';
import RecordState from './components/context/recordState';
import { Main, Navigator } from './components/index'


function App() {

  const [active, setActive] = useState(false);

  return (
    <RecordState>
      <div className="App">
        <Navigator active={active} />
        <Main active={active} setActive={setActive} />
      </div>
    </RecordState>

  );
}

export default App;
