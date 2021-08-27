import React from 'react'
import {Link} from 'react-router-dom'

function NavBar() {
  var number = Math.floor(Math.random() * 100)
  function change_number() {
    number = Math.floor(Math.random() * 100)
    console.log(number)
    NavBar()
  }
    return(
      
        <header className="topbar ombre">
      
  <div className="topbar-container">
      <div id="menuToggle">
          
          <input id="burger" type="checkbox" value="checked" onChange={change_number}/>
        
          <span></span>
          <span></span>
          <span></span>
       
          <ul id="menu" className="ombre burger_text">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
        </ul>
        </div>
        <nav className="menu">
        <div className="topbar-container">
          <div id="profile_image">
            <img src="./img/profile.png" alt="Heyko profile" width="50px"></img>
        </div>
        </div>
        </nav>
        </div>
        </header>
    )
}
/*
class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        Hello {this.props.name}
        <p id="hello-example"></p>
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Taylor" />,
  document.getElementById('hello-example')
);
*/

export default NavBar