import React from 'react'
import ReactDOM from 'react-dom';
import { Alert, Popup } from '../components/Icons'
import { Leaf } from '../components/Icons'

export function sendMessage(type, title, content, datas) {
    class Ok extends React.Component {
        constructor(props) {
            super(props);
            this.handleClick = this.handleClick.bind(this);
        }
        handleClick() {
            ReactDOM.unmountComponentAtNode(document.getElementById("popup"));
        }
        render() {
            return (
                <button className="Global Message Button" onClick={this.handleClick}>
                    Ok
                </button>
            );
        }
    }
    function symbol() {
        if (type === "Wrong") return <Alert />
        if (type === "Success") return <Leaf />
        return <Popup />
    }
    ReactDOM.render(
        <>
        <div className="Global whiteBackground">
            <div className={'Global Message Contener ' + type}>
                {symbol()}
                <h1>{title}</h1>
                <p>{content}</p>
                {(datas && datas.hideButton) ? null : <Ok />}
                </div>
            </div>
        </>,
        document.getElementById('popup')
    );
}

