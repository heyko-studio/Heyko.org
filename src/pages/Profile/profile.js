import React from 'react'
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import './Profile.css';
// import Chart from "react-google-charts";
import { useHistory } from "react-router-dom";
import { username } from '../../functions/get_username';
import { password } from '../../functions/get_password';
import { copyTextToClipboard } from '../../functions/copy_to_clipboard'


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
  console.log(data)
  this.setState({ user_likes: data.likes })
  })
    }
    render() {
      return (
        <>
          <p id="user_likes" className="Profile icon_text">{this.state.user_likes}</p>
  <svg className="Profile number_icons" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
  <p className="Profile icon_text">0</p>
  <svg className="Profile number_icons" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
  <p className="Profile icon_text">0</p>
  <svg className="Profile number_icons" viewBox="0 0 20 20" fill="currentColor">
    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
  </svg>
        </>
      );
    }
  }
  /*class User_Shop extends React.Component {
    render() {
      return (
        <div className="Profile User_shop">
  <svg className="Profile Shop_icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
  <p className="Profile Shop_icon_text">User Shop</p>
  <hr className="hr_3"></hr>
  <p className="Profile icon_text_numbers">25</p>
  <svg className="Profile Shop_icon_numbers" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
  <p className="Profile icon_text_numbers">42</p>
  <svg className="Profile Shop_icon_numbers" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
  </svg>
        <a href="store" className="button view Profile decal_1">View</a>
        </div>
      )
    }
  }
  */
 /*
  class Activity extends React.Component {
    render() {
      return (
        <div className="Profile Activity">
      <svg className="Profile Success_icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
        <p className="Profile Rewards">Activity (Last 7 days)</p>
        <hr className="hr_3"></hr>
        <svg className="Activity messages_icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
  </svg>
  <p className="Activity numbers">2563</p>
  
  
  <svg className="Activity messages_icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  <p className="Activity numbers">16 hours</p>
  
  <svg className="Activity messages_icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
  <p className="Activity numbers">24</p>
  
  
  <svg className="Activity messages_icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
  <p className="Activity numbers">3</p>
  
  
  <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <div id="chart_div"></div>
    <div style={{ display: 'flex', maxWidth: 900 }}>
    <Chart
    className="Activity Chart"
    width={'600px'}
    height={'90px'}
    chartType="LineChart"
    loader={<div>Loading Chart</div>}
    data={[
      ['x', ''],
      [0, 0],
      [1, 10],
      [2, 23],
      [3, 17],
      [4, 18],
      [5, 9],
      [6, 11],
      [7, 27],
      [8, 33],
      [9, 40],
      [10, 32],
      [11, 35],
      [12, 10],
      [13, 23],
      [14, 17],
      [15, 18],
      [16, 9],
      [17, 11],
      [18, 27],
      [19, 33],
      [20, 40],
      [21, 32],
      [22, 35]
    ]}
    options={{
      colors: ['rgb(42, 160, 91)'],
      legend: 'none',
    }}
    rootProps={{ 'data-testid': '1' }}
  />
  </div>
        </div>
      )
    }
  }
  */
 /*
  class Success extends React.Component {
    render() {
      return (
        <>
            <div className="Profile Success">
            <svg className="Profile Success_icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
  </svg>
        <p className="Profile Rewards">Rewards</p>
        <hr className="hr_3"></hr>
        <div className="Rewards_box">
        <svg className="Profile Arrows Left_Arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
  <svg className="Profile Arrows Right_Arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
  <svg className="Profile Rewards_icon gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>
  <svg className="Profile Rewards_icon bronze" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
  </svg>
  <svg className="Profile Rewards_icon gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
  </svg>
  <svg className="Profile Rewards_icon silver" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
  <svg className="Profile Rewards_icon bronze" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
  <svg className="Profile Rewards_icon bronze" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
  <svg className="Profile Rewards_icon silver" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
  </svg>
  </div>  
      </div>
        </>
      );
    }
  }
  */
  const history = useHistory();
  const profile_id = window.location.href.split("/")[window.location.href.split("/").length - 1]
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
      setTimeout(function() {
      function click() {
        history.push("/login");
      }
      const title = React.createElement("h1", {}, 'Please log in');
      const button = <button onClick={() => click()} className="login button ok wrong">Login</button>
      const contener = React.createElement('div', {className : 'default_message wrong'}, title, button);
      ReactDOM.render(
          contener,
          document.getElementById('Profile')
        );
      }, 700);
    }
  }
  else {
    Show_Profile(0, 2)
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
        const img_avatar = <canvas width="500px" height="500px" className="Profile Avatar" id="profile_img_2" />
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
        //const success = React.createElement(Success, {});
        //const activity = React.createElement(Activity, {});

        function share() {
            // SHARE
            copyTextToClipboard("https://heyko.fr/profile/" + user_id)
            function click() {
              unmountComponentAtNode(document.getElementById("message"))
            }
            const title = React.createElement("h1", {}, 'Link copied to clipboard');
            const button = <button onClick={() => click()} className="login button ok wrong">Ok !</button>
            const contener = React.createElement('div', {className : 'default_message success'}, title, button);
            ReactDOM.render(
                <div className="white_background">{contener}</div>,
                document.getElementById('message')
              );
        }

        //const contener_1 = React.createElement("div", {className : 'Profile Contener_1'}, user_contener, description, hr_1, numbers, page_break, user_shop, success, activity);
        const contener_1 = React.createElement("div", {className : 'Profile Contener_1'}, user_contener, description, hr_1, numbers, 
        <><div style={{display: 'inline'}} id="button_like_contener">
        </div><button onClick={() => share()} style={{marginLeft: "8px"}} className="Profile button view">Share</button></>, page_break);
        const br = React.createElement('br', {});
        const contener = React.createElement('div', {className : 'Profile profile_contener'}, contener_1, br, br);
        ReactDOM.render(
            contener,
            document.getElementById('Profile')
          );
          draw(avatar)
          function like() {
            ReactDOM.unmountComponentAtNode(document.getElementById("button_like_contener"))
            ReactDOM.render(
              <button style={{marginLeft: "8px"}} className="button liked">Liked</button>,
              document.getElementById('button_like_contener')
            );
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
              function click() {
                history.push("/login");
              }
              const title = React.createElement("h1", {}, 'Please log in');
              const button = <button onClick={() => click()} className="login button ok wrong">Login</button>
              const contener = React.createElement('div', {className : 'default_message wrong'}, title, button);
              ReactDOM.render(
                  contener,
                  document.getElementById('Profile')
                );
            }
          }
          const requestOptions2 = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: `{"username":"${username}", "password":"${password}", "liked_user_id":"${user_id}"}`
        };
          fetch(`https://backend.heyko.fr/requests/already_liked`, requestOptions2)
          .then(response => response.json())
          .then(data => liked(data))
          function liked(data) {
            if (data.result === true) {
              ReactDOM.render(
                <button style={{marginLeft: "8px"}} className="button liked">Liked</button>,
                document.getElementById('button_like_contener')
              );
            }
            else {
            ReactDOM.render(
              <button onClick={() => like()} style={{marginLeft: "8px"}} className="button like">Like</button>,
              document.getElementById('button_like_contener')
            );
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
        const title = React.createElement("h1", {}, 'Please log in');
        const button = <button onClick={() => click()} className="login button ok wrong">Login</button>
        const contener = React.createElement('div', {className : 'default_message wrong'}, title, button);
        ReactDOM.render(
            contener,
            document.getElementById('Profile')
          );
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
        <div id="message"></div>
        </>
    )
}

export default App