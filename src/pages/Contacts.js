function App() {

  return (
    <div>
<img width="700px" className="heyko_banner_1" src="./img/heyko.png" alt="Heyko banner"></img>


<section className="form-container">
    <h2 id="text1">Contact our team</h2>
    <div className="hr"></div>
    <form className="contact-form">
    <div class="form-line1">
                <input className="input_1" id="text8" type="text" placeholder="First name" required autocomplete="name" name="first name"></input>
                <input className="input_1" id="text9" type="text" placeholder="Last name" required autocomplete="family-name" name="last name"></input>
            </div>
            <div class="form-line2">
                <input className="input_1" type="email" placeholder="Email address" autocomplete="email" required name="email"></input>
                <input className="input_1" id="text10" type="text" placeholder="Subject" required name="sujet"></input>
            </div>
            <div class="form-line3">
                <textarea id="text11" placeholder="Your message" required name="message"></textarea>
            </div>
            <div class="g-recaptcha" data-sitekey="6Lc_66QZAAAAAELv4lDy56GVpQ8HSVIxkZAsdsBK"></div>
        <div className="send-container">
            <button className="send" name="submit" id="text2">Send</button>
        </div>
        </form>
        </section>
</div>
  );

}
export default App;