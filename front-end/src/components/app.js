import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import NavigationContainer from '../navigation/navigation-container'
import Home from './home';
import CodeChallenges from './code-challenges';
import ToughQuestions from './tough-questions';
import AppearanceTips from './appearance-tips';
import ProspectiveCompanies from './prospective-companies';

export default function App() {
  
  return (
    <Router>
    <NavigationContainer />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/code-challenges" component={CodeChallenges} />
        <Route path="/tough-questions" component={ToughQuestions} />
        <Route path="/appearance-tips" component={AppearanceTips} />
        <Route path="/prospective-companies" component={ProspectiveCompanies} />
      </Switch>
      

    </Router>
    
  );
  
}
