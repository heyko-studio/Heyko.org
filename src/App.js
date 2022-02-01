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
import Welcome from './pages/welcome/Welcome'
import Welcome_End from './pages/welcome/End'
import get_user_avatar from './pages/Profile/avatar'
import Game_Poly_Story from './pages/games/Poly_Story'
import Edit_Profile_Avatar from './pages/Profile/Edit_Profile_Avatar'
import Embed from './pages/informations/embed'
import ResetPassword from './pages/ResetPassword/ResetPassword'
import ResetPasswordEnd from './pages/ResetPassword/ResetPasswordEnd'

function App() {
  return (
    <div className="App">
      <Route 
    render={({ location }) => !['/welcome'].includes(location.pathname) && !['/informations/embed'].includes(location.pathname)  && !['/get_user_avatar'].includes(location.pathname) && !['/edit-profile/avatar'].includes(location.pathname)
        ? <NavBar/>
        : null
    }
/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/contacts" component={Contacts}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/sign-up" component={SignUp}/>
      <Route exact path="/informations" component={Informations}/>
      <Route exact path="/branding" component={Branding}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/edit-profile/avatar" component={Edit_Profile_Avatar}/> 
      <Route exact path="/welcome" component={Welcome}/>
      <Route exact path="/welcome/end" component={Welcome_End}/>
      <Route path="/get_user_avatar" component={get_user_avatar}/>
      <Route exact path="/games/poly-story" component={Game_Poly_Story}/>
      <Route exact path="/login/reset-password" component={ResetPassword}/>
      <Route path="/reset-password" component={ResetPasswordEnd}/>
      <Route exact path="/informations/embed" component={Embed}/>
      <Route
    render={({ location }) => !['/welcome'].includes(location.pathname) && !['/informations/embed'].includes(location.pathname) && !['/get_user_avatar'].includes(location.pathname) && !['/edit-profile/avatar'].includes(location.pathname)
        ? <>
        <Footer/>     
          <section id="Footer_decal"></section>
          </>
        : null
    }
/>
    </div>
  );

}


export default App;
