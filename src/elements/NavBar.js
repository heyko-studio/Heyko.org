import React from 'react'
import {Link} from 'react-router-dom'
var burger = 0

function NavBar() {
    return(

        <header class="topbar ombre">
      
  <div class="topbar-container">
      <div id="menuToggle">
          
          <input id="burger" type="checkbox"/>
        
          <span></span>
          <span></span>
          <span></span>
       
          <ul id="menu" class="ombre burger_text">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
        </ul>
        </div>
        <nav class="menu">
        <div class="topbar-container">
          <div id="profile_image">
            <img src="./img/profile.png" alt="Heyko profile" width="50px"></img>
        </div>
        </div>
        </nav>
        </div>
        </header>,
          burger = document.getElementById('burger')
          
    )
}

export default NavBar