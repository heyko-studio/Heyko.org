import React, { useState, useMemo } from 'react'
import './Profile.css';
import waitForElm from "../../functions/waitForElm";

function App() {
    /*
    const [users, setUsers] = useState([]);
    useMemo(
        async () => {
            fetch(`https://backend.heyko.fr/requests/get_random_users`)
            .then(response => response.json())
            .then(data => {
                setUsers(data);
            })
            const element = await waitForElm("#users")
            element.addEventListener('scroll', function() {
                if (element.scrollTop + element.clientHeight >= element.scrollHeight - 800) {
                    loadMore();
                }
            });
        },
        []
    )
    function loadMore () {
        fetch(`https://backend.heyko.fr/requests/get_random_users`)
        .then(response => response.json())
        .then(data => {
            console.log(users)
            console.log(users.concat(data))
            setUsers(users.concat(data));
        })
    }
*/
    class Users extends React.Component {
        constructor(props) {
            super(props);
            this.state = { users:[] };
        }
        componentDidMount() {
            fetch(`https://backend.heyko.fr/requests/get_random_users`)
            .then(response => response.json())
            .then(data => {
                this.setState({users: data});
            })
            const element = document.getElementById("users")
            setInterval(async () => {
                if (element.scrollTop + element.clientHeight >= element.scrollHeight - 800) {
                    await fetch(`https://backend.heyko.fr/requests/get_random_users`)
                    .then(response => response.json())
                    .then(data => {
                        let newUsers = this.state.users.concat(data)
                        //if (newUsers.length > 60) newUsers.splice(0, 20)
                        this.setState({users: newUsers});
                    })
                }
            }, 500);
        }
        render() {
            return (
                <div style={{height: "calc(100vh - 224px)"}} id="users" className='Global Element Contener FullSize Scroll'>
                <h1 style={{color: 'white'}} className='Global Title'>Find friends</h1>
                {
                    this.state.users.map((user, index) => 
                        <div className='Global Element Line' key={"user_" + index}>
                            <p className='Global Element Tag'>{user.pseudo}</p>
                            <a className='anchor right' href={"/profile/" + user.id} target={"/profile/" + user.id}><button className='button view clicked'>View profile</button></a>
                        </div>
                    )
                }
            </div>
            )
        }
    }

    return (
        <div>
            <br></br>
            <br></br>
            <div className='Global Cover Background Gradient'>
            </div>
            <Users />
        </div>
    );
    
}

export default App