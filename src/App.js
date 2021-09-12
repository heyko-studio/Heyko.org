import {Route} from 'react-router-dom';
import React from "react";
import Home from './Home';
import Contacts from './pages/Contacts';
import Connection from './pages/connection';
import NavBar from './elements/NavBar';




function App() {
  return (
    <div className="App">
      <NavBar/>
     <Route exact path="/" component={Home}/>
     <Route exact path="/contacts" component={Contacts}/>
     <Route exact path="/connection" component={Connection}/>
    </div>
  );

}


export default App;
