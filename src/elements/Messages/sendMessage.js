import React from 'react'
import ReactDOM from 'react-dom';
import { Alert } from './Icons'

export function sendMessage(type, title, content) {
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
                <button className="Global Message Button" onClick={this.handleClick}>
                    Ok
                </button>
                );
            }
        }
    ReactDOM.render(
        <>
        <div className="Global whiteBackground"></div>
        <div className={'Global Message Contener ' + type}>
            <Alert />
            <h1>{title}</h1>
            <p>{content}</p>
            <Ok />
            </div>
        </>,
        document.getElementById('message_screen')
    );
}

