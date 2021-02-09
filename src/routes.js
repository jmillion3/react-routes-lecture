import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Contact from './components/Contact.js';
import About from './components/About.js';
import Home from './components/Home.js';

export default (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/about" component={About}/>
    </Switch>
)