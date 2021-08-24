import {Route} from 'react-router-dom';
import React from "react";
import Home from './Home';
import Contacts from './Contacts';
import NavBar from './elements/NavBar';



function App() {
  return (
    <div className="App">
      <NavBar/>
     <Route exact path="/" component={Home}/>
     <Route exact path="/contacts" component={Contacts}/>
    </div>
  );
}


export default App;
