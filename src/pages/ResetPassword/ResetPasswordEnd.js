import React from 'react';
import './ResetPassword.css';
import {Link} from 'react-router-dom'
import { sendMessage } from '../../elements/Messages/sendMessage';
function App() {
    function handleSubmit(e) {
        e.preventDefault();
        const password = document.getElementById("password").value
        const code = window.location.href.split("/")[window.location.href.split("/").length - 1]
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: `{"password":"${password}", "code":"${code}"}`
        };
 fetch(`https://backend.heyko.fr/requests/reset_password`, requestOptions)
            .then(response => response.json())
            .then(data => result(data))
            
            function result(data) {
                console.log(data);
                if (data.results) {
                    sendMessage("Success", "Success !", "Password successfully reset.")
                }
                else {
                    sendMessage("Wrong", "Error", "The request has expired, or the link is invalid.")
                }
            }
    }
    return (
    <>
    <div id="background"></div>
<div id="login_contener">
</div>
<img width="700px" className="heyko_banner_1" src="../img/heyko.png" alt="Heyko banner"></img>


<section className="form-container">
<h2 id="text1">Reset Your Password</h2>
<div className="hr"></div>
<form onSubmit={handleSubmit} className="contact-form">
    <div className="form-line1">
        <input id="password" className="input_1" type="password" placeholder="New password" required name="password"></input>
    </div>
    <div className="send-container">
        <button className="send" name="submit" type="submit">Reset</button>
    </div>
    <div className="form-line4">
        <Link to="../login" className="link">➡️ Log in</Link>
    </div>
    </form>
    </section>
  </>
  );
}

export default App;