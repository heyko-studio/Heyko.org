import React from 'react'
import waitForElm from '../functions/waitForElm'

export default function Avatar(props) {
    const draw = async  (actions) => {
        if (actions) {
        const canvas = props.customId ? await waitForElm("#" + props.customId) : await waitForElm("#profile_avatar")
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
    draw(props.actions)
    return(
        <>
            <canvas width={props.width} height={props.height} id={props.customId || "profile_avatar"} />
            {props.content}
        </>
    )
}