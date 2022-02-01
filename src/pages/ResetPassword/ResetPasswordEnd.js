import React from 'react';
import './ResetPassword.css';
import {Link} from 'react-router-dom'
import SendErrorMessage from '../../elements/Messages/Error'
import SendMessage from '../../elements/Messages/Success'
function App() {
    function handleSubmit(e) {
        e.preventDefault();
        const password = document.getElementById("password").value
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: `{"password":"${password}"}`
        };
 fetch(`https://backend.heyko.fr/requests/reset_password`, requestOptions)
            .then(response => response.json())
            .then(data => result(data))
            
            function result(data) {
                console.log(data);
                if (data.results) {
                    SendMessage("An email has been sent to you. If you can't find it, check your spam folder.")
                }
                else {
                    if (data.error) {
                        if (data.error === 1) {
                            SendErrorMessage("You have already received 3 reset emails recently. To go further, contact our support.")
                        }
                    }
                    else {
                        SendErrorMessage("We are unable to find your account.Please check your email address or the password you specified earlier. If the problem persists, please contact us.")
                    }
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