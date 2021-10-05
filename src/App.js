import {Route} from 'react-router-dom';
import React from "react";
import Home from './Home';
import Contacts from './pages/Contacts';
import Login from './pages/Login';
import NavBar from './elements/NavBar';
import Footer from './elements/Footer';
import SignUp from './pages/SignUp';
import Informations from './pages/informations/Informations';
import Branding from './pages/Branding/Branding';
import Profile from './pages/Profile/profile'

function App() {
  return (
    <div className="App">
      <NavBar/>
     <Route exact path="/" component={Home}/>
     <Route exact path="/contacts" component={Contacts}/>
     <Route exact path="/login" component={Login}/>
     <Route exact path="/sign-up" component={SignUp}/>
     <Route exact path="/informations" component={Informations}/>
     <Route exact path="/branding" component={Branding}/>
     <Route exact path="/profile" component={Profile}/>
     <Footer/>
    </div>
  );

}


export default App;
