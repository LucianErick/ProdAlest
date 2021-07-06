import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { Header } from './components/Header/header';
import { About } from './pages/AboutPage';
import { Home } from './pages/Homepage';
import { Register } from './pages/RegisterProduct';

function Routes(){
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/cadastrar" component={Register} />
                <Route path="/sobre" component={About} />
            </Switch>        
        </BrowserRouter>
    );
};

export default Routes;