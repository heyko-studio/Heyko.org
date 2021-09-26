import ReCAPTCHA from "react-google-recaptcha";
import React from 'react';
const recaptchaRef = React.createRef();

function App() {
  
    function handleSubmit(e) {
        e.preventDefault();
        const first_name = document.getElementById("first_name").value
        const last_name = document.getElementById("last_name").value
        const email = document.getElementById("email").value
        const subject = document.getElementById("subject").value
        const content = document.getElementById("content").value
        const recaptcha = recaptchaRef.current.getValue()

        if (recaptcha) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: `{"first_name":"${first_name}","last_name":"${last_name}","email":"${email}","subject":"${subject}","content":"${content}", "captcha":"${recaptcha}"}`
        };
       fetch(`https://backend.heyko.fr/requests/send_mail?`, requestOptions)
            .then(response => response.json())
            .then(data => console.log(data))  
      }
      else {
        console.log(recaptcha)
      }
    }
  return (
      <>
    <div>

<img width="700px" className="heyko_banner_1" src="./img/heyko.png" alt="Heyko banner"></img>


<section className="form-container">
    <h2 id="text1">Contact our team</h2>
    <div className="hr"></div>
    <form className="contact-form" onSubmit={handleSubmit}>
    <div className="form-line1">
                <input className="input_1" id="first_name" type="text" placeholder="First name" required autoComplete="name" name="first name"></input>
                <input className="input_1" id="last_name" type="text" placeholder="Last name" required autoComplete="family-name" name="last name"></input>
            </div>
            <div className="form-line2">
                <input className="input_1" id="email" type="email" placeholder="Email address" autoComplete="email" required name="email"></input>
                <input className="input_1" id="subject" type="text" placeholder="Subject" required name="sujet"></input>
            </div>
            <div className="form-line3">
                <textarea id="content" placeholder="Your message" required name="message"></textarea>
            </div>
            <ReCAPTCHA sitekey="6LdOR5AcAAAAAF80awkaFKClF2lkD95wsmvYyBWX" ref={recaptchaRef}/>
        <div className="send-container">
            <button className="send" name="submit" id="text2">Send</button>
        </div>
        </form>
        </section>
</div>


</>
  );
  

}
export default App;