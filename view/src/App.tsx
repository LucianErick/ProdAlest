import React from 'react';
import { Header } from './components/Header/header';
import { Home } from './pages/Homepage';
import './styles/global.scss'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { Register } from './pages/RegisterProduct';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <Routes/>
    </div>
  );
}

export default App;
