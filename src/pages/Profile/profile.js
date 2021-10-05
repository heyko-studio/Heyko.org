import React from 'react'
import ReactDOM from 'react-dom';
import './Profile.css';


function App() {
    function getCookie(cName) {
        const name = cName + "=";
        const cDecoded = decodeURIComponent(document.cookie);
        const cArr = cDecoded.split('; ');
        let res;
        cArr.forEach(val => {
          if (val.indexOf(name) === 0) res = val.substring(name.length);
        })
        return res
      }
      
      const username = getCookie("username")
      const password = getCookie("password")
      if (username && password) {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
    fetch(`https://backend.heyko.fr/requests/user_exists?${username}?${password}`, requestOptions)
    .then(response => response.json())
    .then(data => {
        console.log(data)
      if (data.exists === "true") {
          const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
       fetch(`https://backend.heyko.fr/requests/get_user_avatar?${username}`, requestOptions)
            .then(response => response.json())
            .then(avatar => {
              const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            };
           fetch(`https://backend.heyko.fr/requests/get_user_description?${username}`, requestOptions)
                .then(response => response.json())
                .then(user_description => {
        console.log(user_description)
        console.log(avatar)
        const img_avatar = React.createElement("img", {className : 'Profile Avatar', src : `${avatar.user_image}`});
        const title = React.createElement("h1", {className : 'Profile Username'}, `${username}`);
        const bio_description = React.createElement("p", {className : 'Profile Bio_Description'}, `${user_description.user_description}`);
        const description = React.createElement("div", {className : 'Profile Bio'}, bio_description);
        const contener = React.createElement('div', {className : 'Profile profile_contener'}, img_avatar, title, description);
        ReactDOM.render(
            contener,
            document.getElementById('Profile')
          );
        })  
        })  
      }
      else {
        const title = React.createElement("h1", {}, 'Please log in');
        const button = React.createElement("a", {className : 'login button ok wrong', href : 'login'}, 'Login');
        const contener = React.createElement('div', {className : 'default_message wrong'}, title, button);
        ReactDOM.render(
            contener,
            document.getElementById('Profile')
          );
      }
      })
    }
    
      
    return(
        <>
        <div id="Profile"></div>
        </>
    )
}

export default App