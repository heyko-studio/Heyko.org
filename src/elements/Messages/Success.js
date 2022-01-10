import React from 'react'
import ReactDOM from 'react-dom';

export function SendMessage(content) {
        class Ok extends React.Component {
            constructor(props) {
                super(props);
                this.handleClick = this.handleClick.bind(this);
            }
            
            handleClick() {
                ReactDOM.unmountComponentAtNode(document.getElementById("message_screen"))
            }
            
            render() {
                return (
                <button className="login button ok wrong" onClick={this.handleClick}>
                    Ok
                </button>
                );
            }
        }
    const title = React.createElement('h1', {},  content);
    const ok = React.createElement(Ok, {}, 'Ok');
    const contener = React.createElement('div', {className : 'login success default_message'}, title, ok);
    ReactDOM.render(
        <>
        <div className="login white_background"></div>
        {contener}
        </>,
        document.getElementById('message_screen')
    );
}

