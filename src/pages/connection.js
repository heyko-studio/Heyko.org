
function App() {

  return (
<div>
<img width="700px" className="heyko_banner_1" src="./img/heyko.png" alt="Heyko banner"></img>


<section className="form-container">
    <h2 id="text1">Log in</h2>
    <div className="hr"></div>
    <form className="contact-form" method="post">
        <div className="form-line1">
            <input className="input_1" type="text" placeholder="Username" required name="c_pseudo"></input>
            <input className="input_1" type="password" placeholder="Password" required name="c_mdp"></input>
        </div>
        <div className="send-container">
            <button className="send" name="submit" id="text2">Login</button>
        </div>
       <div className="form-line3">
            <a id="text3" href="other/account/change_pass" className="link">● Forgot your password?</a>
        </div>
        <br></br>
        <div className="form-line4">
            <a id="text4" href="inscription" className="link">● Sign up</a>
        </div>
        </form>
        </section>
</div>
  );
}

export default App;