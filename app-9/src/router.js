import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import Details from './Details';
import Signup from './Signup';

export default (
  <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/details" component={Details}/>
      <Route path="/signup" component={Signup}/>
  </Switch>
) 
