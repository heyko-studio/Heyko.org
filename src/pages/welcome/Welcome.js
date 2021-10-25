import React from 'react'
import './Welcome.css';
import ReactDOM from 'react-dom';
import Canvas from './Canvas'
import { useEffect, useState } from "react";


function Welcome() {

    var error_screen = 0
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

    class Next_1 extends React.Component {
        
        constructor(props) {
            super(props);
            this.handleClick = this.handleClick.bind(this);
            this.Next_Button = React.createRef();
        }
        handleClick() {
            document.getElementById("body").style.overscrollBehavior = 'contain'
            ReactDOM.render(
                <div className="Welcome transition_2"></div>,
                document.getElementById('anim_1')
            );
            
            setTimeout(function() {
            var elem = document.getElementById("Welcome_Page");
            elem.parentNode.removeChild(elem);         
            ReactDOM.render(
                <>
                <div className="Welcome transition_3" id="Welcome_Page">
                    <h1 className="Welcome Title_2">🎨 Customise your profile</h1>
                    <div className="Welcome profile">
                    <div id="#canvas" className="Welcome profile_editor_circle">
                    <Canvas />
                    </div>
                    </div>
                </div>
                </>,
                document.getElementById('App')
            );
        }, 1050);
        }
        render() {
            return (
                <button id="Next_Button_1" onClick={this.handleClick} className="button Next Welcome decal_1">Next</button>
            );
        }
    }
    const contener = React.createElement(Next_1, {className : 'Welcome Button Next'});
    setTimeout(function() {
    ReactDOM.render(
        contener,
        document.getElementById('Next_Button')
    );
}, 9500);
//0);
    return(
        <div id="Welcome_Page" className="Welcome Contener"> 
            <div className="Welcome Background v1"></div>
            <div className="Welcome Background v4"></div>
            <div className="Welcome Background v2"></div>
            <div className="Welcome Background v3"></div>
            <div className="Circle v1"></div>
            <div className="Circle v2"></div>
            <div className="Circle v3"></div>
            <div className="Circle v4"></div>
            <div className="Circle v5"></div>
            <div className="Circle v6"></div>

            <h1 className="Welcome Title_1">🌈 Welcome to Heyko 🦄</h1>

        <div className="Welcome examples">
            <p className="Welcome example v1">✨ Discover original free games</p>
            <p className="Welcome example v2">💬 Chat with a great community</p>
            <p className="Welcome example v3">🎨 Customise your profile</p>
            <p className="Welcome example v4">📈 Trade with other users</p>
            <div id="Next_Button"></div>
            </div>
            <div className="Circle v7"></div>
            <div id="anim_1"></div>
        </div>
    )
}

export default Welcome