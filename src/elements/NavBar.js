import React from 'react'
import {Link} from 'react-router-dom'
import { useHistory } from "react-router-dom";
import { username } from '../functions/get_username';
import { password } from '../functions/get_password';
import { User } from '../elements/Icons';
import ReactDOM from 'react-dom';



function NavBar() {
  var exists = undefined
  const history = useHistory();
  const { useRef, useEffect } = React;
  const Load = (value) => {
  const firstUpdate = useRef(true);

  // Change navbar color on scroll
  window.addEventListener("scroll", () => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    const navbar = document.querySelector("#navbar");
    if (window.scrollY > 100) {
      navbar.classList.add("light");
    } else {
      navbar.classList.remove("light");
    }
  });
  
  
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      class PROFILE_BUTTON extends React.Component {
        constructor(props) {
          super(props);
        this.state = {
          image_link: 'img/profile.png'
        }
      
        }
        componentDidMount() {
          function show_login_button() {
            ReactDOM.render(
              <button onClick={() => history.push("/login")} style={{marginRight:"20px"}} className="button view NavBar_Profile_Button">Login</button>,
              document.getElementById('Profile_Button')
            );
          }
          function profile() {
            history.push("/profile");
          }
            if (exists) {
              ReactDOM.render(
                <button onClick={() => profile()} style={{marginRight:"20px"}} className="button view NavBar_Profile_Button">Profile</button>,
                document.getElementById('Profile_Button')
              );
              class Profile_burger_link extends React.Component {
                render() {
                  return (
                      <>
                      <li><a href="/profile">Profile</a></li>
                        </> 
                  );
                }
              }
              document.getElementById("burger_login_page_link").style = "display:none"
              var BURGER_PROFILE_BUTTON = new Profile_burger_link().render;
              ReactDOM.render(
                <BURGER_PROFILE_BUTTON />,
              document.getElementById('Profile_burger_link')
              );
              
        }
        else {
          show_login_button()
        }
        
        }
        render() {
          return (
            <div id="Profile_Button">
                  
            </div>
          );
        }
      
      }
      class PROFILE extends React.Component {
        constructor(props) {
          super(props);
        this.state = {
          image_link: 'img/profile.png'
        }
      
        }
        componentDidMount() {
      
          if (username && password) {
          const requestOptions2 = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: `{"username":"${username}", "password":"${password}"}`
        };
      fetch(`https://backend.heyko.fr/requests/user_exists`, requestOptions2)
            .then(response => response.json())
            .then(data => {
              exists = data.exists
              ReactDOM.render(
                <PROFILE_BUTTON />,
              document.getElementById('profile_button')
              );
              if (data.exists === true) {
              const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: `{"user_id":"${data.id}"}`
            };
            if (data.admin) {
              const link = "https://admin.heyko.fr/?" + username + "?" + password
              ReactDOM.render(
                <li><a href={link} target={link}>Admin Panel</a></li>,
              document.getElementById('burger_admin_link')
              );
            }
            fetch(`https://backend.heyko.fr/requests/get_user_avatar`, requestOptions)
                .then(response => response.json())
                .then(data => draw(data))  
      
                const draw = (data) => {
                  console.log(data)
                  const actions = data.user_image
                  if (actions) {
                  const canvas = document.getElementById("profile_img")
                  const ctx = canvas.getContext('2d')
                  var background_color = undefined
                  var background = false
                  if (!Array.isArray(actions[actions.length - 1])) {
                  background_color = actions[actions.length - 1]
                  background = true
                  }
                  this.setState({ image_link: data.user_image })
                  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
                  if (background) {
                      ctx.fillStyle = background_color;
                      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                  }
                  actions.forEach(element => {
                      const tool_type = element[5]
                      if (tool_type === 0 || tool_type === 1 ||tool_type === 2) {
                      const x = element[0]
                      const y = element[1]
                      const color = element[4]
                      if (tool_type === 0) {
                          ctx.lineWidth = element[6]
                          ctx.strokeStyle = color
                          ctx.beginPath()
                          ctx.moveTo(element[2], element[3]);
                          ctx.lineTo(x, y);
                          ctx.stroke()
                      }
                      else {
                          if (tool_type === 1) {
                              ctx.strokeStyle = element[4][1]
                              ctx.lineWidth = element[4][4]
                              ctx.fillStyle = element[4][0]
                              ctx.beginPath()
                              ctx.arc(element[2], element[3], (Math.abs(element[2] - x) + Math.abs(element[3] - y)), 0, 2 * Math.PI);
                                  if (element[4][2]) {
                                  ctx.fill()
                                  }
                                  if (element[4][3]) {
                                  ctx.stroke()
                                  }
      
                          }
                          else {
                          if (tool_type === 2) {
                              ctx.strokeStyle = element[4][1]
                              ctx.lineWidth = element[4][4]
                              ctx.fillStyle = element[4][0]
                              ctx.beginPath()
                              ctx.rect(element[2], element[3], element[0] - element[2], element[1] - element[3]);
                                  if (element[4][2]) {
                                  ctx.fill()
                                  }
                                  if (element[4][3]) {
                                  ctx.stroke()
                                  }
                          }
                      }
                      }
                      }
                  });
                }
              } 
          }
          
              })  
            }
            else {
              ReactDOM.render(
                <>
                  <PROFILE_BUTTON />
                </>
                ,
              document.getElementById('profile_button')
              );
              ReactDOM.render(
                User("Global Icon Medium"),
                document.getElementById('PROFILE')
              )
            }
      
      }  
          
      /* className="profile_img"*/
        render() {
          return (
            <div id="navbar_profile_canvas">
                  <canvas width="500px" height="500px" className="profile_img" id="profile_img" />
            </div>
          );
        }
      }
      ReactDOM.render(
        <PROFILE/>,
      document.getElementById('PROFILE')
      );
      return;
    }
  });

  return (
    <div>
      { value }
    </div>
  );
}

function ErrorBanner() {
  const old_name = "heyko.fr"
  if (window.location.hostname === old_name) {
    const new_location = window.location.href.split(old_name).join('heyko.org')
    return <div className="ErrorBannerSwitchDomain contnainer">
      <p className="ErrorBannerSwitchDomain text">We are changing our domain name. heyko.fr -{">"} heyko.org. </p>
      <a href={new_location}><button className="ErrorBannerSwitchDomain button">Switch</button></a>
    </div>
  }
}

    return(
      <>
        <header id="navbar" className="topbar shadow">
  <div className="topbar-container">
      <div id="menuToggle">
          
      <input id="burger" type="checkbox"/>
        
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu" className="shadow burger_text">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
            <li><Link to="/informations">Details</Link></li>
            <li id="burger_login_page_link"><Link to="/login">Login</Link></li>
            <div id="burger_admin_link"></div>
            <div id="Profile_burger_link"></div>
        </ul>
        </div>
        <nav className="menu">
        <div style={{margin: 0}} className="topbar-container">
          <div id="profile_button"></div>
          <Link to="/profile">
          <div id="profile_image">
            <div id="PROFILE"></div>
          </div>
          </Link>
        </div>
        </nav>
        </div>
        </header>
        {Load()}
        {ErrorBanner()}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        </>
    )
}

export default NavBar