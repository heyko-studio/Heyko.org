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
    image_link: 'img/profile.png'
  }

  }
  componentDidMount() {
    function getCookie(cName) {
      const name = cName + "=";
      const cDecoded = decodeURIComponent(document.cookie); //to be careful
      const cArr = cDecoded.split('; ');
      let res;
      cArr.forEach(val => {
        if (val.indexOf(name) === 0) res = val.substring(name.length);
      })
      return res
    }

   const username = getCookie("username")
  // const password = getCookie("password")

 
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      //  body: JSON.stringify({ username:username,password:password }),
    };
   fetch(`https://backend.heyko.fr/requests/get_user_avatar`, requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ image_link: data.user_image }))

        
}

  render() {
    return (
      <div>
        <img className="profile_img" id="profile_img" src={this.state.image_link} alt="Avatar"></img>
      </div>
    );
  }
}



function NavBar() {
    return(
      <div className="navbar">
        <header className="topbar shadow">
      
  <div className="topbar-container">
      <div id="menuToggle">
          
      <input id="burger" type="checkbox"/>
        
          <span></span>
          <span></span>
          <span></span>
       
          <ul id="menu" className="shadow burger_text">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
          { /* <li><Link to="/connection">Login</Link></li> */}
        </ul>
        </div>
        <nav className="menu">
        <div className="topbar-container">
          <div id="profile_image">
       <Profile/>
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