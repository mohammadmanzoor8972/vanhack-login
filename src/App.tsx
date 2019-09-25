import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import LogIn from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Album from './components/Album/Album';

const App: React.FC = () => {
  return (
    <div className="App">
    <BrowserRouter>
    <Switch>
      <Route path="/login" component={LogIn}/>
      <Route path="/signup" component={SignUp}/>
      <Route path="/album" component={Album}/>
      <Redirect from="/" to="signup"/>
    </Switch>
  </BrowserRouter> 
  </div>
  );
}

export default App;
