import React from 'react'
import {Link} from 'react-router-dom'





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
      const cDecoded = decodeURIComponent(document.cookie);
      const cArr = cDecoded.split('; ');
      let res;
      cArr.forEach(val => {
        if (val.indexOf(name) === 0) res = val.substring(name.length);
      })
      return res
    }
    const username = getCookie("username")
    const password = getCookie("password")
    if (username && password) {
    const requestOptions2 = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: `{"username":"${username}", "password":"${password}"}`
  };
fetch(`https://backend.heyko.fr/requests/user_exists`, requestOptions2)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        if (data.exists === true) {
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: `{"username":"${username}"}`
      };
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

}  
    
/* className="profile_img"*/
  render() {
    return (
      <div>
            <canvas width="500px" height="500px" className="profile_img" id="profile_img" />
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
            { /* <li><Link to="/login">Login</Link></li> */}
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

export default NavBar