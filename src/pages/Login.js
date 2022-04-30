import React from 'react';
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';
import './login.css';
import { Link } from 'react-router-dom'
import { sendMessage } from '../elements/Messages/sendMessage';
import { useHistory } from 'react-router-dom';

function App() {
    const history = useHistory()
    function handleSubmit(e) {
        e.preventDefault();
        const email = document.getElementById("mail").value
        const password = document.getElementById("password").value
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: `{"username":"${email}", "password":"${password}"}`
        };
        fetch(`https://backend.heyko.fr/requests/user_exists`, requestOptions)
            .then(response => response.json())
            .then(data => connect(data))
      }
      function connect(data) {
          console.log(data)
        if (data.exists === true) {
            const d = new Date();
            d.setTime(d.getTime() + (3*24*60*60*1000));
            let expires = "expires="+ d.toUTCString();
            document.cookie = "username=" + data.username + ";" + expires
            document.cookie = "password=" + document.getElementById("password").value + ";" + expires
            history.push('/profile')
        }
        else {
          sendMessage("Wrong", "Login error", "Wrong email address/username or password. Contact us on discord for help")
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
        <Link to="/login/reset-password" className="link">➡️ Forgot your password ?</Link>
        <br></br>
        <br></br>
            <Link to="/sign-up" className="link">➡️ Sign Up</Link>
        </div>
        </form>
        </section>
</div>
  );
}

export default App;