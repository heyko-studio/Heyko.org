import React from 'react'
import './Welcome.css';
import ReactDOM from 'react-dom';

class Next_1 extends React.Component {
    render() {
        return (
            <button>Next</button>
        );
    }
}

function Welcome() {
    const contener = React.createElement(Next_1, {className : 'Welcome Button Next'});
    setTimeout(function() {

    ReactDOM.render(
        contener,
        document.getElementById('Next_Button')
    );
}, 9500);
    return(
        <div className="Welcome Contener">  
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
            </div>
            <div className="Circle v7"></div>
            <div id="Next_Button"></div>
        </div>
    )
}

export default Welcome