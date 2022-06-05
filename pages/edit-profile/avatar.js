import React from 'react'
import styles from '../../styles/Profile.module.css';
import welcomeStyles from '../../styles/Welcome.module.css';
import Canvas from '../../components/EditProfileCanvas'
import ReactDOM from 'react-dom';
import { sendMessage } from '../../functions/sendMessage'
function App() {
    var error_screen = 0
    typeof window !== 'undefined' ? document.querySelector("body").style.overscrollBehavior = 'contain' : null
    setTimeout(function() {
    reportWindowSize()
    }, 100)
    function reportWindowSize() {
        if (typeof window === 'undefined') return;
        if (window.innerHeight < 516) {
            if (error_screen !== 1) {
                error_screen = 1
                sendMessage("Wrong", "Please rotate your phone", "Your phone should be upright.")
            }
        }
        else {
            if (error_screen === 1) {
                error_screen = 0
                ReactDOM.unmountComponentAtNode(document.getElementById("message_screen")) 
            }
        }
    }

    typeof window !== 'undefined' ? window.onresize = reportWindowSize : null;
    return(
        <>
                <div className={welcomeStyles.transition_3} id="Welcome_Page">
                    <h1 className={welcomeStyles.title}>🎨 Customise your profile</h1>
                    <div className={welcomeStyles.profile}>
                    <div id="#canvas" className={welcomeStyles.profile_editor_circle}>
                    <Canvas />
                    </div>
                    </div>
                </div>
        </>
    )
}

export default App