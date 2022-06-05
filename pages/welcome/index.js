import React from 'react'
import styles from '../../styles/Welcome.module.css';
import ReactDOM from 'react-dom';
import { sendMessage } from '../../functions/sendMessage';
import Canvas from '../../components/EditProfileCanvas'


function Welcome() {
    var error_screen = 0
    setTimeout(function() {
        reportWindowSize()
    }, 100)
    function reportWindowSize() {
        if (typeof window === 'undefined') return;
        if (window.innerHeight < 516) {
            if (error_screen !== 1) {
                error_screen = 1
                typeof window !== 'undefined' && sendMessage("Wrong", "Your screen is too small", "Please rotate your phone", {hideButton : true})
            }
        }
        else {
            if (error_screen === 1) {
                error_screen = 0
                typeof window !== 'undefined' && ReactDOM.unmountComponentAtNode(document.getElementById("popup")) 
            }
        }
    }

    typeof window !== 'undefined' ? window.onresize = reportWindowSize : null;

    class Next_1 extends React.Component {
        
        constructor(props) {
            super(props);
            this.handleClick = this.handleClick.bind(this);
            this.Next_Button = React.createRef();
        }
        handleClick() {
            document.querySelector("body").style.overscrollBehavior = 'contain'
            ReactDOM.render(
                <div className={styles.transition_2}></div>,
                document.getElementById('anim_1')
            );
            
            setTimeout(function() { 
            ReactDOM.render(
                <>
                    <div className={styles.transition_3} id="Welcome_Page">
                        <h1 className={styles.title}>🎨 Customise your profile</h1>
                        <div className={styles.profile}>
                        <div id="#canvas" className={styles.profile_editor_circle}>
                        <Canvas />
                        </div>
                        </div>
                    </div>
                </>,
                document.getElementById('Welcome_Page')
            );
        }, 1050);
        }
        render() {
            return (
                <button id="Next_Button_1" onClick={this.handleClick} className={`button Next ${styles.decal_1}`}>Next</button>
            );
        }
    }
    const contener = React.createElement(Next_1, {className : 'Welcome Button Next'});
    setTimeout(function() {
    typeof window !== 'undefined' && ReactDOM.render(
        contener,
        document.getElementById('Next_Button')
    );
}, 9500);
//}, 9500);

    return(
        <div id="Welcome_Page" className={styles.Contener}> 
            <div className={[styles.Background, styles.v1].join(" ")}></div>
            <div className={[styles.Background, styles.v4].join(" ")}></div>
            <div className={[styles.Background, styles.v2].join(" ")}></div>
            <div className={[styles.Background, styles.v3].join(" ")}></div>
            <div className={[styles.Circle, styles.v1].join(" ")}></div>
            <div className={[styles.Circle, styles.v2].join(" ")}></div>
            <div className={[styles.Circle, styles.v3].join(" ")}></div>
            <div className={[styles.Circle, styles.v4].join(" ")}></div>
            <div className={[styles.Circle, styles.v5].join(" ")}></div>
            <div className={[styles.Circle, styles.v6].join(" ")}></div>

            <h1 className={styles.Title_1}>🌈 Welcome to Heyko 🦄</h1>

        <div className={styles.examples}>
            <p className={[styles.example, styles.v1].join(" ")}>✨ Discover original games</p>
            <p className={[styles.example, styles.v2].join(" ")}>💬 Chat with a great community</p>
            <p className={[styles.example, styles.v3].join(" ")}>🎨 Customise your profile</p>
            <p className={[styles.example, styles.v4].join(" ")}>📈 Trade with other users</p>
            <div id="Next_Button"></div>
            </div>
            <div className="Circle v7"></div>
            <div id="anim_1"></div>
        </div>
    )
}

export default Welcome