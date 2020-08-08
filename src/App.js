import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Start from './Components/Start/Start';
// import Stepper from './Components/Stepper/Stepper'


function App() {
  return (
    <div className="App">
      <Start />
    </div>
  );
}

export default App;
