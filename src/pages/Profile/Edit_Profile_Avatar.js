import React from 'react'
import './Profile.css';
import Canvas from '../welcome/Canvas'

function App() {
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