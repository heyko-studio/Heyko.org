import React from 'react'
import './Profile.css';
import Canvas from '../welcome/Canvas'
import ReactDOM from 'react-dom';

function App() {
  var error_screen = 0
  document.getElementById("body").style.overscrollBehavior = 'contain'
  setTimeout(function() {
    reportWindowSize()
    }, 100)
    function reportWindowSize() {
        if (window.innerHeight < 516) {
            if (error_screen !== 1) {
                error_screen = 1
                ReactDOM.render(
                    <>
                    <div className="white_background">
                    </div>
                    <div className="default_message wrong">Please rotate your phone</div>
                    </>,
                    document.getElementById('error_screen')
                );
            }
        }
        else {
            if (error_screen === 1) {
                error_screen = 0
                ReactDOM.unmountComponentAtNode(document.getElementById("error_screen")) 
            }
        }
    }

    window.onresize = reportWindowSize;
    return(
        <>
                <div className="Welcome transition_3" id="Welcome_Page">
                    <h1 className="Welcome Title_2">🎨 Customise your profile</h1>
                    <div className="Welcome profile">
                    <div id="#canvas" className="Welcome profile_editor_circle">
                    <Canvas />
                    </div>
                    </div>
                </div>
        </>
    )
}

export default App