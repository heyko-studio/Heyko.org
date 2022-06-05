import React from 'react';
import Link from 'next/link'
import { sendMessage } from '../functions/sendMessage';
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import setCookie from '../functions/setCookie';

function App() {
    function handleSubmit(e) {
        e.preventDefault();
        const email = document.getElementById("mail").value
        const username = document.getElementById("username").value
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: `{"mail":"${email}","username":"${username}"}`
        };
      fetch(`https://backend.heyko.fr/requests/email_or_username_already_used`, requestOptions)
            .then(response => response.json())
            .then(data => check_1(data))  
      }
      function add_user(data) {
        if (data.results === "error") {
          if (data.error === "username_too_long") {
            sendMessage("Wrong", "Registration error", "Username too long")
          }
          else {
            if (data.error === "email_too_long") {
              sendMessage("Wrong", "Registration error", "Email address too long")
            }
            else {
              if (data.error === "password_too_long") {
                sendMessage("Wrong", "Registration error", "Password too long")
              }
            }
          }
          }
          else  {
              window.location = 'welcome';
          }
      }
      function check_1(data) {
        if (data.results === "unused") {
          const email = document.getElementById("mail").value
          const username = document.getElementById("username").value
          const password = document.getElementById("password").value
          setCookie("username", username, 3)
          setCookie("password", password, 3)
          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: `{"email":"${email}","username":"${username}", "password":"${password}"}`
        };
          fetch(`https://backend.heyko.fr/requests/add_user`, requestOptions)
          .then(response => response.json())
          .then(data => add_user(data))  
        }
        else {
            if (data.results === "username") {
                sendMessage("Wrong", "Registration error", "This username is already in use")
            }   
            else {
                if (data.results === "email") {
                    sendMessage("Wrong", "Registration error", "This email address is already in use")
                }  
            } 
        }
      }
  return (
  <>
    <Navbar/>
    <div id="background"></div>
    <div id="login_contener"></div>
    <img width="700px" className="heyko_banner_1" src="./img/heyko.png" alt="Heyko banner"></img>
    <section className="form-container">
      <h2 id="text1">Sign Up</h2>
      <div className="hr"></div>
      <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-line1">
              <input id="username" className="input_1" type="username" placeholder="Username" required name="username"></input>
              <input id="password" className="input_1" type="password" placeholder="Password" required name="password"></input>
          </div>
          <div className="form-line2">
              <input id="mail" className="input_1" type="email" placeholder="Email address" required name="email"></input>
          </div>
          <div className="form-line3">
              <Link href="/terms">✅ Terms of service</Link>
          </div>
          <div className="form-line3">
              <a href="/privacy.html">✅ Privacy Policy</a>
          </div>
          <div className="send-container">
              <button className="send" name="submit" type="submit">Sign Up</button>
          </div>
          <div className="form-line4">
              <Link href="/login">➡️ Already have an account ?</Link>
          </div>
      </form>
    </section>
    <Footer/>
  </>
  );
}

export default App;
