import React from 'react'
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import './Profile.css';
// import Chart from "react-google-charts";
import { useHistory } from "react-router-dom";
import { username } from '../../functions/get_username';
import { password } from '../../functions/get_password';
import { copyTextToClipboard } from '../../functions/copy_to_clipboard'
import { sendMessage } from '../../elements/Messages/sendMessage';

function App() {

  var profile_user_id = undefined

  class Numbers extends React.Component {
    constructor(props) {
      super(props);
    this.state = {
      user_likes: 0
    }
  
    }
    componentDidMount() {
    var user_id = 0
    const profile_id = window.location.href.split("/")[window.location.href.split("/").length - 1]
    if (!parseInt(profile_id)) {
      user_id = profile_user_id
    }
    else {
      user_id = parseInt(profile_id)
    }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: `{"user_id":"${user_id}"}`
  };
fetch(`https://backend.heyko.fr/requests/get_likes`, requestOptions)
.then(response => response.json())
.then(data => {
  this.setState({ user_likes: data.likes })
  })
    }
    render() {
      return (
        <>
          <p id="user_likes" className="Profile icon_text">{this.state.user_likes || 0}</p>
  <svg id="User Like Button" className="Profile number_icons button" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
  <p className="Profile icon_text" id="number_money">0</p>
  <svg className="Profile number_icons" viewBox="0 0 20 20" fill="currentColor">
    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
  </svg>
        <div id="Follow Button Contener">

        </div>
        </>
      );
    }
  }
  const history = useHistory();
  const profile_id = window.location.href.split("/")[window.location.href.split("/").length - 1]
  if (profile_id.split("connect").length > 1) {
    if (username && password) {
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: `{"username":"${username}", "password":"${password}"}`
      };
  fetch(`https://backend.heyko.fr/requests/user_exists`, requestOptions)
  .then(response => response.json())
  .then(data => check_user(data))
  function check_user(data) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: `{"user_id":"${data.id}", "token":"${window.location.href.split("?code=")[window.location.href.split("?code=").length - 1]}"}`
  };
fetch(`https://backend.heyko.fr/requests/discord_connect`, requestOptions)
.then(response => response.json())
.then(data2 => connect_result(data, data2))
function connect_result(data, data2) {
  console.log(data2)
  if (data2.result) {
sendMessage("Succes", "Success !", "Successful connection to Discord :D")
  }
  Show_Profile(data, 1)
}
  }
  }
  else {
    history.push("/login");
    sendMessage("Wrong", "Error while accessing your profile", "Please log in");
  }
  }
  else {
  if (!parseInt(profile_id)) {
      if (username && password) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: `{"username":"${username}", "password":"${password}"}`
        };
    fetch(`https://backend.heyko.fr/requests/user_exists`, requestOptions)
    .then(response => response.json())
    .then(data => Show_Profile(data, 1))
    }
    else {
      history.push("/login");
      sendMessage("Wrong", "Error while accessing your profile", "Please log in");
    }
  }
  else {
    Show_Profile(0, 2)
  }
}
    function Show_Profile(data, type) {
      var user_id = 0
      if (type === 1) {
        console.log(data)
        user_id = data.id
        profile_user_id = data.id
      }
      if (type === 2) {
        user_id = parseInt(profile_id)
      }
      console.log(user_id)
      if (data.exists === true ||type === 2) {
          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: `{"user_id":${user_id}}`
        };
      fetch(`https://backend.heyko.fr/requests/get_user_avatar`, requestOptions)
            .then(response => response.json())
            .then(avatar => {
              const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: `{"user_id":"${user_id}"}`
            };
            const draw = (data) => {
              console.log(data)
              const actions = data.user_image
              if (actions) {
              const canvas = document.getElementById("profile_img_2")
              const ctx = canvas.getContext('2d')
              var background_color = undefined
              var background = false
              if (!Array.isArray(actions[actions.length - 1])) {
              background_color = actions[actions.length - 1]
              background = true
              }
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

          fetch(`https://backend.heyko.fr/requests/get_user_description`, requestOptions)
                .then(response => response.json())
                .then(user_description => {
        console.log(user_description)
        console.log(avatar)
        var img_avatar = undefined
        if (type === 1) {
            img_avatar = <div className='Profile Image-Edit Contener'><canvas width="500px" height="500px" className="Profile Avatar" id="profile_img_2" /><button onClick={() => history.push("edit-profile/avatar")} className='Profile Edit_Profile_Button'>
              <svg className="Profile Edit_Profile_Button_Icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
            </button></div>
        }
        else {
        img_avatar = <canvas width="500px" height="500px" className="Profile Avatar" id="profile_img_2" />
        }
        var title = undefined
        if (type === 2) {
          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: `{"user_id":"${user_id}"}`
        };
        fetch(`https://backend.heyko.fr/requests/get_username`, requestOptions)
        .then(response => response.json())
        .then(data => show_username(data.username))
      }
      else {
        show_username(username)
      }
          

        function show_username(profile_username) {
        title = React.createElement("h1", {className : 'Profile Username'}, `${profile_username}`);
        var bio_description = undefined
        if (user_description.user_description) {
        bio_description = React.createElement("p", {className : 'Profile Bio_Description'}, `${user_description.user_description}`);
        }
        else {
          bio_description = React.createElement("p", {className : 'Profile Bio_Description'}, `😴`);
        }
        const description = React.createElement("div", {className : 'Profile Bio'}, bio_description);
        const user_contener = React.createElement("div", {className : 'Profile User_Contener'}, img_avatar, title);
        const hr_1 = React.createElement("hr", {className : 'hr_2'});
        //const user_shop= React.createElement(User_Shop, {});
        const numbers = React.createElement(Numbers, {});
        const page_break = React.createElement("div", {className : "Profile Page_Break"});

        
        function connect_discord() {
          // CONNECT TO DISCORD
          window.open("https://discord.com/oauth2/authorize?response_type=code&client_id=691702487178150010&redirect_uri=https://heyko.org/profile/connect&scope=identify", "_self")
      }
        function share() {
            // SHARE
            copyTextToClipboard("https://heyko.org/profile/" + user_id)
            function click() {
              unmountComponentAtNode(document.getElementById("message"))
            }
            sendMessage("Success", "Link copied to the clipboard", "Feel free to share it around, so everyone can see the beautiful avatar you drew 😎")
        }
        const contener_1 = React.createElement("div", {className : 'Profile Contener_1'}, user_contener, description, hr_1, numbers, 
        <>
                  <br className='Profile buttons br'></br><br className='Profile buttons br'></br><br className='Profile buttons br'></br>
        <div className="Profile buttons contener">
          <div className="Profile button contener" id="button_like_contener"></div>
        <div className="Profile button contener">
        <svg className='Profile number_icons Button' style={{marginLeft: "8px"}} onClick={() => share()} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
        </div>
        <div className="Profile button contener" id="button_discord_contener">
        </div>
        </div>
        <div></div>
        </>, page_break);
        const br = React.createElement('br', {});
        const contener = React.createElement('div', {className : 'Profile profile_contener'}, contener_1, br, br);
        ReactDOM.render(
            contener,
            document.getElementById('Profile')
          );
          draw(avatar)
          function like() {
            ReactDOM.unmountComponentAtNode(document.getElementById("button_like_contener"))
            document.getElementById("User Like Button").style.color = "#e66a89"
            document.getElementById("user_likes").innerHTML = parseInt(document.getElementById("user_likes").innerHTML) + 1
            const requestOptions2 = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: `{"username":"${username}", "password":"${password}", "liked_user_id":${user_id}}`
          };
            fetch(`https://backend.heyko.fr/requests/like_user`, requestOptions2)
            .then(response => response.json())
            .then(data => like_end(data))
          }
      
          function like_end(data) {
            console.log(data)
            if (data.result === 'error_user_not_found') {
              history.push("/login");
              sendMessage("Wrong", "Error while accessing your profile", "Please log in");
            }
          }
          const requestOptions2 = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: `{"username":"${username}", "password":"${password}", "liked_user_id":"${user_id}"}`
        };
          fetch(`https://backend.heyko.fr/requests/profile_datas`, requestOptions2)
          .then(response => response.json())
          .then(data => account_infos(data))
          function account_infos(data) {
            console.log(data)
            const money = data.money
            if (data.liked === true) {
              document.getElementById("User Like Button").style.color = "#e66a89"
            }
            else {
              document.getElementById("User Like Button").onclick = () => like()
            }
            if (money) {
              document.getElementById("number_money").innerHTML = money / 100
            }
            if (type === 1) {
            if (data.discord_account === true) {
              ReactDOM.render(
                <img alt="discord logo" className='Profile Discord Button' src="https://heyko.org/img/discord.svg"></img>,
                document.getElementById('button_discord_contener')
              );
            } else {
              ReactDOM.render(
                <svg onClick={() => connect_discord()} className='Profile Discord Button' viewBox="0 0 127.14 96.36"><g id="图层_2" data-name="图层 2"><g id="Discord_Logos" data-name="Discord Logos"><g id="Discord_Logo_-_Large_-_White" data-name="Discord Logo - Large - White"><path class="cls-1" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/></g></g></g></svg>,
                document.getElementById('button_discord_contener')
              );
            }
          }
          else {
            ReactDOM.render(
              <svg className="Profile number_icons Button" style={{marginLeft: "10px"}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>,
              document.getElementById('Follow Button Contener')
            );
            if (data.discord_account === true) {
              ReactDOM.render(
                <img alt="discord logo" className='Profile Discord Button' src="https://heyko.org/img/discord.svg"></img>,
                document.getElementById('button_discord_contener')
              );
            }
          }
          
          const requestOptions2 = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: `{"user_id":"${user_id}"}`
        };
          fetch(`https://backend.heyko.fr/requests/get_user_items`, requestOptions2)
          .then(response => response.json())
          .then(data => Load_Inventory(data))
          function Load_Inventory(data) {
            console.log(data)
            if (data.items) {
              ReactDOM.render(
                <div className='Profile Inventory Contener'>
                  <h2 className='Profile Inventory Title'>Inventory</h2>
                  <div className='Profile Items Contener'>
                  {
                    data.items.map((element, index) =>
                      <div className='Profile Inventory Item' key={"Item_" + index}>
                        <div style={{backgroundImage: `url("${element.icon}")`}} className='Profile Inventory Item_Icon'></div>
                      </div>
                    )
                  }
                  </div>
                </div>,
                document.getElementById('Inventory')
              );
            }
            else {
              ReactDOM.render(
                <div className='Profile Inventory Contener Empty'>
                  <p className='Profile Inventory Message'>Empty inventory</p>
                </div>,
                document.getElementById('Inventory')
              );
            }
          }
          }
        }
        })  

        })  
      }
      else {
        function click() {
          history.push("/login");
        }
        
        setTimeout(() => {
          if (type === 1) {
            history.push("/login");
            sendMessage("Wrong", "Error while accessing your profile", "Please log in");
        }
        else {
          const title = React.createElement("h1", {}, 'Page not found');
          const contener = React.createElement('div', {className : 'default_message wrong'}, title);
          ReactDOM.render(
              contener,
              document.getElementById('Profile')
            );
        }
        }, 500);
      }
      }
      
    return(
        <>
        <div id="Profile"></div>
        <div id="Inventory"></div>
        <div id="message"></div>
        </>
    )
}

export default App
