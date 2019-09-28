import React from 'react';
import './App.scss';
import { HashRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'
import LogIn from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Album from './components/Album/Album';

const App: any = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" component={LogIn}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/album" component={Album}/>
          <Redirect from="/" to="login"/>
        </Switch>
      </div>
  </Router> 
  );
}

export default App;
