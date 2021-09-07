import React from 'react'
import {Link} from 'react-router-dom'
var image_link = 'https://images-eu.ssl-images-amazon.com/images/I/81BES%2BtsVvL.png';

GetUserProfileImage();
/*
function GetUserProfileImage()
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://heyko.alwaysdata.net/requests/get_user_avatar", false ); // false for synchronous request
    xmlHttp.send("test");
    return xmlHttp.responseText;
}
*/
function GetUserProfileImage() {
  let x = new XMLHttpRequest();
x.open("POST", `https://heyko.alwaysdata.net/requests/get_user_avatar`);
x.setRequestHeader("Content-type", "application/json");
let params = {
}
x.send(JSON.stringify(params))

x.onreadystatechange = (e) => {
  console.log(x.responseText)
}
  }

class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        <img className="profile_img" id="profile_img" src={image_link} alt="Heyko profile"></img>
      </div>
    );
  }
}

function NavBar() {
  var number = Math.floor(Math.random() * 100)
  function change_number() {
    number = Math.floor(Math.random() * 100)
    console.log(number)
    NavBar()
  }
    return(
      <div>
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
       <HelloMessage/>
        {
        document.getElementById('hello-example')
         }
        </div>
        </div>
        </nav>
        </div>
        </header>
        </div>
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