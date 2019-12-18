import React from 'react';
import {  BrowserRouter as Router,  Switch,  Route} from "react-router-dom";
import './App.css';

import './Components/ActionList';
import ActionList from './Components/ActionList';
import SignIn from './Components/SignIn';
import NewNote from './Components/NewNote';
import NewList from './Components/NewList';
import NewEvent from './Components/NewEvent';
import NewLink from './Components/NewLink';
import YourProfile from './Components/YourProfile';
import Settings from './Components/Settings';
import KnowMore from './Components/KnowMore';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={['/','/signin']} exact component={SignIn}/>
          <Route path='/dashboard' exact component = {ActionList}/>
          <Route path='/newnote' exact component = {NewNote} />
          <Route path='/newlist' exact component ={NewList} />
          <Route path='/newevent' exact component = {NewEvent} />
          <Route path='/newlink' exact component ={NewLink} />
          <Route path='/yourprofile' exact component ={YourProfile}/>
          <Route path='/settings' exact component ={Settings}/>
          <Route path='/knowmore' exact component ={KnowMore}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
