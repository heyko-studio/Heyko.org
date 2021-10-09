/**import React, { useRef, useEffect } from 'react'

    const Canvas = props => {
    
    const canvasRef = useRef(null)

    const canvas = canvasRef.current;
    console.log(canvas)
    var actions = [[100,20,'#0fff']]
    console.log(window)
    const draw = (ctx) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        actions.forEach(element => {
            const x = element[0]
            const y = element[1]
            const color = element[2]
            ctx.fillStyle = color
            ctx.beginPath()
            ctx.arc(x, y, 20*Math.sin(1)**2, 0, 2*Math.PI)
            ctx.fill()
        });
    }
    
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    const test = () => {
        actions.push([90,getRandomInt(100),'#0fff'])
        console.log(getMousePosition(canvasRef))
    }
    function getMousePosition(canvas, event) {
        let rect = canvas.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;
        console.log("Coordinate x: " + x, 
                    "Coordinate y: " + y);
    }
    useEffect(() => {
        
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        let animationFrameId
        
        const render = () => {
        draw(context)
        animationFrameId = window.requestAnimationFrame(render)
        }
        render()
        
        return () => {
        window.cancelAnimationFrame(animationFrameId)
        }
    }, [draw])
    
    return <canvas id="canvas" className="Welcome Canvas" onClick={test} ref={canvasRef} {...props}/>
    }

export default Canvas
**/
    import { Delaunay } from "d3-delaunay"
    import React, { useRef, useEffect, useState } from 'react'
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
    import { faCircle } from '@fortawesome/free-regular-svg-icons'
    import { faSquare } from '@fortawesome/free-regular-svg-icons'


    function MapCanvas({ initialBottomRight, initialTopLeft }) {
        var tool = 0;
        var last_action = undefined;
        var actions = []
        var fill_color = '#353535'
        var stroke_color = '#2ea0e8' 
        var fill = true;
        var stroke = false;
        var stroke_width = 3;
    
        const draw = (ctx) => {
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
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
                /*                                context.rect(last_action[0], last_action[1], x - last_action[0], y - last_action[1]);
                ctx.strokeStyle = color
                ctx.beginPath()
                ctx.moveTo(0, 0);
                ctx.lineTo(x, y);
                ctx.stroke()
                */
                /*
                ctx.fillStyle = color
                ctx.beginPath()
                ctx.arc(x, y, 20*Math.sin(1)**2, 0, 2*Math.PI)
                ctx.fill()
                */
                }
            });
        
        } 
    const canvasRef = useRef(null)
    const [bottomRight] = useState(initialBottomRight);
    const [topLeft] = useState(initialTopLeft);

    useEffect(() => {
        const scale = window.devicePixelRatio;
        const canvas = canvasRef.current;
        canvas.width = canvas.clientWidth * scale;
        canvas.height = canvas.clientHeight * scale;
        const context = canvas.getContext('2d')
        context.scale(scale, scale);

        function handleMouseClick(e) {
            if (tool === 0) {
                
                if (last_action === undefined) {
                    last_action = [e.offsetX, e.offsetY]
                } else {
                    actions.push([e.offsetX, e.offsetY, last_action[0], last_action[1], stroke_color, 0, stroke_width])
                    last_action = undefined;
                }
            }
            else {
                if (tool === 1) {
                    if (last_action === undefined) {
                        last_action = [e.offsetX, e.offsetY]
                    }
                    else {
                        actions.push([e.offsetX, e.offsetY, last_action[0], last_action[1], [fill_color, stroke_color, fill, stroke, stroke_width], 1])
                        last_action = undefined;
                    }
                }
                else {
                    if (tool === 2) {
                        if (last_action === undefined) {
                            last_action = [e.offsetX, e.offsetY]
                        }
                        else {
                            actions.push([e.offsetX, e.offsetY, last_action[0], last_action[1], [fill_color, stroke_color, fill, stroke, stroke_width], 2])
                            last_action = undefined;
                        }
                    }
                    else {
                        last_action = undefined;
                    }
                }
            }
                draw(context)
            }
            function handleMouseMove(e) {
                if (tool === 0) {
                
                    if (last_action !== undefined) {
                        draw(context)
                        const x = e.offsetX
                        const y = e.offsetY
                        const color = stroke_color
                        context.lineWidth = stroke_width
                        context.strokeStyle = color
                        context.beginPath()
                        context.moveTo(last_action[0], last_action[1]);
                        context.lineTo(x, y);
                        context.stroke()
                    } 
                    
                }
                else {
                    if (tool === 1) {
                        if (last_action !== undefined) {
                            draw(context)
                            const x = e.offsetX
                            const y = e.offsetY

                            context.lineWidth = stroke_width;
                            context.fillStyle = fill_color
                            context.strokeStyle = stroke_color
                            context.lineWidth = stroke_width;
                            context.beginPath()
                            context.arc(last_action[0], last_action[1], (Math.abs(last_action[0] - x) + Math.abs(last_action[1] - y)), 0, 2 * Math.PI);
                            if (fill) {
                            context.fill()
                            }
                            if (stroke) {
                            context.stroke()
                            }
                        } 
                        
                    }
                    else {
                        if (tool === 2) {
                            if (last_action !== undefined) {
                                draw(context)
                                const x = e.offsetX
                                const y = e.offsetY
                                const color = fill_color
                                context.lineWidth = stroke_width;
                                context.fillStyle = fill_color
                                context.strokeStyle = stroke_color
                                context.lineWidth = stroke_width;
                                context.beginPath();
                                context.rect(last_action[0], last_action[1], x - last_action[0], y - last_action[1]);
                                if (fill) {
                                context.fill()
                                }
                                if (stroke) {
                                context.stroke()
                                }
                            } 
                            
                        }
                    }
                }

            }
        const checkbox_fill_color = document.getElementById('checkbox_fill_color')
        const checkbox_stroke_color = document.getElementById('checkbox_stroke_color')  
        const picker_fill_color = document.getElementById('picker_fill_color')
        const picker_stroke_color = document.getElementById('picker_stroke_color')  
        

        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('click', handleMouseClick);  
            checkbox_fill_color.addEventListener('change', (event) => {
                fill = checkbox_fill_color.checked
        })
            checkbox_stroke_color.addEventListener('change', (event) => {
                stroke = checkbox_stroke_color.checked
        })
                    picker_fill_color.addEventListener('change', (event) => {
                fill_color = picker_fill_color.value
        })
            picker_stroke_color.addEventListener('change', (event) => {
                stroke_color = picker_stroke_color.value
        })
        


        const map_width = bottomRight.x - topLeft.x;
        const map_height = bottomRight.y - topLeft.y;
        let x_step = context.canvas.width / (scale * (map_width + 1));
        let y_step = context.canvas.height / (scale * (map_height + 1));

        let Iterator = {
        _i: -1,

        [Symbol.iterator]() {
            this.current = -1;
            return this;
        },

        next() {
            let center = getTileCenter(topLeft.x, this._i, topLeft.y, this.current, x_step, y_step);

            if (this.current >= map_height + 1) {
            this._i++;
            this.current = -1;
            return { done: false, value: [center.x, center.y] };
            } else {
            this.current++;
            return { done: this._i > map_width + 1, value: [center.x, center.y] };
            }
        }
        };

        const voronoi = Delaunay.from(Iterator).voronoi([0, 0, canvas.width, canvas.height]);
        context.beginPath();
        context.strokeStyle = "#ffffff";
        context.fillStyle = "#000000";
        voronoi.render(context);
        context.fill();
        context.stroke();

        context.closePath();

    }, [bottomRight, topLeft])

    function onKeyPressed(event) {

    }
    class Trash_button extends React.Component {
        constructor(props) {
            super(props);
            this.handleClick = this.handleClick.bind(this);
        }
        handleClick() {
            actions = []
            draw(canvasRef.current.getContext('2d'))
        }
        render() {
            return (
        <button onClick={() => this.handleClick()} className="Welcome profile_tool_bar_item_button"><svg className="Welcome profile_tool_bar_item" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
        </button>
            )
        }
    }
    class Pen_button extends React.Component {
        constructor(props) {
            super(props);
            this.handleClick = this.handleClick.bind(this);
        }
        handleClick() {
            tool = 0
        }
        render() {
            return (
        <button onClick={() => this.handleClick()} className="Welcome profile_tool_bar_item_button">
        <svg className="Welcome profile_tool_bar_item" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
        </button>
            )
        }
    }
    class Circle_button extends React.Component {
        constructor(props) {
            super(props);
            this.handleClick = this.handleClick.bind(this);
        }
        handleClick() {
            tool = 1
        }
        render() {
            return (
        <button onClick={() => this.handleClick()} className="Welcome profile_tool_bar_item_button">
        <FontAwesomeIcon icon={faCircle} className="Welcome profile_tool_bar_item v2" />
        </button>
            )
        }
    }
    class Square_button extends React.Component {
        constructor(props) {
            super(props);
            this.handleClick = this.handleClick.bind(this);
        }
        handleClick() {
            tool = 2
        }
        render() {
            return (
        <button onClick={() => this.handleClick()} className="Welcome profile_tool_bar_item_button">
        <FontAwesomeIcon icon={faSquare} className="Welcome profile_tool_bar_item v2" />
        </button>
            )
        }
    }
        class Slider extends React.Component {
        constructor(props) {
            super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            slider_val: 3
        }
        }
        handleChange() {
            const slider = document.getElementById("stroke_width")
            this.setState({ slider_val: slider.value })
            stroke_width = slider.value
        }
        render() {
            return (
                <>
                <p className="Welcome Slider_value">{this.state.slider_val}</p><input onChange={this.handleChange} type="range" min="1" max="100" defaultValue="3" className="Welcome Slider_1" id="stroke_width"></input>
                </>
            )
        }
    }
    return <>
    <div className="Welcome profile_tool_bar_colors">
    <input defaultChecked={true} id="checkbox_fill_color" type="checkbox" className="Welcome Color_Checkbox"></input><p className="Welcome profile_tool_bar_titles">Fill color</p>
        <input id="picker_fill_color" defaultValue="#353535" type="color" className="Welcome Color_picker"></input>
              
              <hr></hr>
              <input id="checkbox_stroke_color" type="checkbox" className="Welcome Color_Checkbox"></input>
              <p className="Welcome profile_tool_bar_titles">Outline</p><br></br>
              <p className="Welcome profile_tool_bar_titles">Line color</p>
      <input id="picker_stroke_color" defaultValue="#2ea0e8" type="color" className="Welcome Color_picker"></input>
        <p className="Welcome profile_tool_bar_titles">Line width</p>
        <Slider />
    </div>

    <canvas className="Welcome Canvas" width="100%" height="100%" onKeyDown={onKeyPressed}
        tabIndex={0} ref={canvasRef} />
                    <div className="Welcome profile_tool_bar">
<Trash_button />
<Pen_button />
<Circle_button />
<Square_button />
</div>
        </>
        
    }

    function getTileCenter(i_prefix, i, j_prefix, j, tile_width, tile_height) {
    const x = i + i_prefix;
    const y = j + j_prefix;
    let alpha = ((x * 16807 + y * y * 37 + 509 ^ x + 71 ^ (y - 27)) % tile_width + 881) % tile_width;
    let beta = (((x & 1) * (y + 71) * 389 + y * 601 + 127 ^ (x - 27)) % tile_height + 439) % tile_height;
    return { x: i * tile_width + alpha % tile_width, y: j * tile_height + beta % tile_height };
    }

    export function getDimensions(center, plot_width) {
    const width_plots_amount = window.innerWidth / plot_width;
    const height_plots_amount = window.innerHeight / (plot_width / 2);
    return {
        topLeft: { x: center.x - width_plots_amount / 2, y: center.y - height_plots_amount / 2 },
        bottomRight: { x: center.x + width_plots_amount / 2, y: center.y + height_plots_amount / 2 }
    };
    }

    export default MapCanvas