import React from 'react'
import './Profile.css';

    function App() {
            document.getElementById("body").style = "overflow: hidden; background-color: rgba(0, 0, 0, 0.8);"
            const user_id = window.location.href.split("?")[1]
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: '{ "user_id": ' + user_id + '}'
            };
        fetch(`https://backend.heyko.fr/requests/get_user_avatar`, requestOptions)
                .then(response => response.json())
                .then(avatar => {
                const draw = (data) => {
                console.log(data)
                const actions = data.user_image
                if (actions) {
                const canvas = document.getElementById("profile_img_2")
                const ctx = canvas.getContext('2d')
                var background_color = undefined
                var background = false
                if (!Array.isArray(actions[actions.length - 1])) {
                background_color = actions[actions.length - 1]
                background = true
                }
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
                if (background) {
                    ctx.fillStyle = background_color;
                    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                }
                actions.forEach(element => {
                    const tool_type = element[5]
                    if (tool_type === 0 || tool_type === 1 ||tool_type === 2) {
                    const x = element[0]
                    const y = element[1]
                    const color = element[4]
                    if (tool_type === 0) {
                        ctx.lineWidth = element[6]
                        ctx.strokeStyle = color
                        ctx.beginPath()
                        ctx.moveTo(element[2], element[3]);
                        ctx.lineTo(x, y);
                        ctx.stroke()
                    }
                    else {
                        if (tool_type === 1) {
                            ctx.strokeStyle = element[4][1]
                            ctx.lineWidth = element[4][4]
                            ctx.fillStyle = element[4][0]
                            ctx.beginPath()
                            ctx.arc(element[2], element[3], (Math.abs(element[2] - x) + Math.abs(element[3] - y)), 0, 2 * Math.PI);
                                if (element[4][2]) {
                                ctx.fill()
                                }
                                if (element[4][3]) {
                                ctx.stroke()
                                }
    
                        }
                        else {
                        if (tool_type === 2) {
                            ctx.strokeStyle = element[4][1]
                            ctx.lineWidth = element[4][4]
                            ctx.fillStyle = element[4][0]
                            ctx.beginPath()
                            ctx.rect(element[2], element[3], element[0] - element[2], element[1] - element[3]);
                                if (element[4][2]) {
                                ctx.fill()
                                }
                                if (element[4][3]) {
                                ctx.stroke()
                                }
                        }
                    }
                    }
                    }
                });
                }
                
            }
            draw(avatar)


        })  

            return (
            <div>
                    <canvas width="500px" height="500px" className="profile_img get_user_avatar" id="profile_img_2" />
            </div>
            );
        
        }

        

export default App