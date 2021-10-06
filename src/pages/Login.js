import React from 'react';
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';
import './login.css';
import {Link} from 'react-router-dom'


class Ok extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick() {
        reactDom.unmountComponentAtNode(document.getElementById("login_contener"))
        reactDom.unmountComponentAtNode(document.getElementById("background")) 
      }
    
      render() {
        return (
          <button className="login button ok wrong" onClick={this.handleClick}>
              Ok
          </button>
        );
      }
  }
  class Loading extends React.Component {
      render() {
        return (
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        );
      }
  }
function App() {
    function handleSubmit(e) {
        e.preventDefault();
        const email = document.getElementById("mail").value
        const password = document.getElementById("password").value
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch(`https://backend.heyko.fr/requests/user_exists?${email}?${password}`, requestOptions)
            .then(response => response.json())
            .then(data => connect(data))  
      }
      function connect(data) {
          console.log(data)
        if (data.exists === "true") {
            const title = React.createElement("h1", {}, 'Hello ' + data.username + '🎉');
            const loader = React.createElement(Loading, {}, '');
            const contener = React.createElement('div', {className : 'login default_message success'}, title, loader);
            ReactDOM.render(
                contener,
                document.getElementById('login_contener')
              );
              const background = React.createElement('div', {className : 'login white_background'}, '');
              ReactDOM.render(
                  background,
                  document.getElementById('background')
                );
            document.cookie = "username=" + data.username
            document.cookie = "password=" + document.getElementById("password").value
            setTimeout(function() {
              window.location = 'profile';
            }, 1000);
        }
        else {
            const title = React.createElement('h1', {}, 'Wrong email address/username or password. Contact us on discord for help');
            const ok = React.createElement(Ok, {}, 'Ok');
            const contener = React.createElement('div', {className : 'login wrong default_message'}, title, ok);
            ReactDOM.render(
                contener,
                document.getElementById('login_contener')
              );
              const background = React.createElement('div', {className : 'login white_background'}, '');
              ReactDOM.render(
                  background,
                  document.getElementById('background')
                );
                
        }
      }
  return (
      
<div>
    <div id="background"></div>
<div id="login_contener">
</div>
<img width="700px" className="heyko_banner_1" src="./img/heyko.png" alt="Heyko banner"></img>


<section className="form-container">
    <h2 id="text1">Log in</h2>
    <div className="hr"></div>
    <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-line1">
            <input id="mail" className="input_1" type="username" placeholder="Email address / Username" required name="email"></input>
            <input id="password" className="input_1" type="password" placeholder="Password" required name="password"></input>
        </div>
        <div className="send-container">
            <button className="send" name="submit" type="submit">Login</button>
        </div>
        <div className="form-line4">
            <Link to="/sign-up" className="link">➡️ Sign Up</Link>
        </div>
        {
            /*
        <div className="form-line3">
            <a id="text3" href="other/account/change_pass" className="link">● Forgot your password?</a>
        </div>
        <br></br>
        <div className="form-line4">
            <a id="text4" href="sign-up" className="link">● Sign up</a>
        </div>
        */
}
        </form>
        </section>
</div>
  );
}

export default App;