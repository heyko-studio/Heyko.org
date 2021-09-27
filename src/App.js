import {Route} from 'react-router-dom';
import React from "react";
import Home from './Home';
import Contacts from './pages/Contacts';
import Login from './pages/Login';
import NavBar from './elements/NavBar';
import SignUp from './pages/SignUp';



function App() {
  return (
    <div className="App">
      <NavBar/>
     <Route exact path="/" component={Home}/>
     <Route exact path="/contacts" component={Contacts}/>
     <Route exact path="/login" component={Login}/>
     <Route exact path="/sign-up" component={SignUp}/>
    </div>
  );

}


export default App;
