import React from 'react'
import {Link} from 'react-router-dom'



/*
function GetUserProfileImage()
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "http://158.101.204.28:8100/requests/get_user_avatar", false ); // false for synchronous request
    xmlHttp.send("test");
    return xmlHttp.responseText;
}
*/






class Profile extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
    image_link: ''
  }
  }
  componentDidMount() {
    function getCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for(var i=0;i < ca.length;i++) {
          var c = ca[i];
          while (c.charAt(0)===' ') c = c.substring(1,c.length);
          if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
      }
      return null;
  }

    const username = getCookie("heyko_username")
    const password = getCookie("heyko_password")

    console.log(username)
    console.log(" | ")
    console.log(password)
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username:"truc" })
    };
    fetch('http://158.101.204.28:8100/requests/get_user_avatar', requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ image_link: data }));
        
        
}

  render() {
    return (
      <div>
        <img className="profile_img" id="profile_img" src={JSON.stringify(this.state.image_link)} alt="Heyko profile"></img>
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
       <Profile/>
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