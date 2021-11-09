import React from "react";
import './End.css';
import { useHistory } from "react-router-dom";

function Welcome() {
    const history = useHistory();
    function profile() {
        history.push("/profile");
    }
    return(
        <div id="test" className="Welcome_End Test"> 
        <h1 className="Title_2">Thank you 💖</h1>
        <h2 className="Subtitle_2">Congratulations, you have completed your registration :D</h2>
        <button onClick={() => profile()} style={{marginLeft: '40px'}} className="button view">Go to profile</button>
        </div>
    )
}

export default Welcome