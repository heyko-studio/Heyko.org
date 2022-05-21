    import React, { useRef, useEffect } from 'react'
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
    import { faCircle } from '@fortawesome/free-regular-svg-icons'
    import { faSquare } from '@fortawesome/free-regular-svg-icons'
    import { faUndo } from '@fortawesome/free-solid-svg-icons'
    import { faRedo } from '@fortawesome/free-solid-svg-icons'
    import  { faPalette } from '@fortawesome/free-solid-svg-icons'
    import { useHistory } from "react-router-dom";

    function MapCanvas() {
        window.scrollTo(0, 1);
        const history = useHistory();
        let tool = 0;
        let last_action = undefined;
        let actions = []
        let fill_color = '#353535'
        let stroke_color = '#2ea0e8' 
        let fill = true;
        let stroke = false;
        let stroke_width = 3;
        var mouse_pressed = false;
        var background = false;
        var background_color = '#7CD8FF'
        var redo = []
    
        const draw = (ctx) => {
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
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d')
        context.scale(1, 1);


        function handleMouseUp (e) {
            mouse_pressed = false
            const bx = canvas.getBoundingClientRect();
            if (actions.length < 100) {
                const width = parseInt(getComputedStyle(canvasRef.current).width.split('px')[0])
                const height = parseInt(getComputedStyle(canvasRef.current).height.split('px')[0])
                const w_diff = 500 / width
                const h_diff = 500 / height
                const x = (e.offsetX) * w_diff || (e.changedTouches[0].clientX - bx.left) * w_diff
                const y = (e.offsetY) * h_diff || (e.changedTouches[0].clientY - bx.top) * h_diff
            if (tool === 0) {
                
                if (last_action === undefined) {
                    last_action = [x, y]
                } else {
                    actions.push([x, y, last_action[0], last_action[1], stroke_color, 0, stroke_width])
                    redo = []
                    last_action = undefined;
                }
            }
            else {
                if (tool === 1) {
                    if (last_action === undefined) {
                        last_action = [x, y]
                    }
                    else {
                        actions.push([x, y, last_action[0], last_action[1], [fill_color, stroke_color, fill, stroke, stroke_width], 1])
                        redo = []
                        last_action = undefined;
                    }
                }
                else {
                    if (tool === 2) {
                        if (last_action === undefined) {
                            last_action = [x, y]
                        }
                        else {
                            actions.push([x, y, last_action[0], last_action[1], [fill_color, stroke_color, fill, stroke, stroke_width], 2])
                            redo = []
                            last_action = undefined;
                        }
                    }
                    else {
                        last_action = undefined;
                    }
                }
            }
        }
        }

        function handleMouseDown(e) {
            mouse_pressed = true
            const bx = canvas.getBoundingClientRect();
            const width = parseInt(getComputedStyle(canvasRef.current).width.split('px')[0])
            const height = parseInt(getComputedStyle(canvasRef.current).height.split('px')[0])
            const w_diff = 500 / width
            const h_diff = 500 / height
            const x = (e.offsetX) * w_diff || (e.changedTouches[0].clientX - bx.left) * w_diff
            const y = (e.offsetY) * h_diff || (e.changedTouches[0].clientY - bx.top) * h_diff
            if (actions.length < 100) {
                draw(context)
                last_action = [x, y]
            }
        }
            function handleMouseMove(e) {
                const bx = canvas.getBoundingClientRect();
                if (mouse_pressed) {
                if (tool === 0) {
                    if (last_action !== undefined) {
                        draw(context)
                        const width = parseInt(getComputedStyle(canvasRef.current).width.split('px')[0])
                        const height = parseInt(getComputedStyle(canvasRef.current).height.split('px')[0])
                        const w_diff = 500 / width
                        const h_diff = 500 / height
                        const x = (e.offsetX) * w_diff || (e.changedTouches[0].clientX - bx.left) * w_diff
                        const y = (e.offsetY) * h_diff || (e.changedTouches[0].clientY - bx.top) * h_diff

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
                            const width = parseInt(getComputedStyle(canvasRef.current).width.split('px')[0])
                            const height = parseInt(getComputedStyle(canvasRef.current).height.split('px')[0])
                            const w_diff = 500 / width
                            const h_diff = 500 / height
                            const x = (e.offsetX) * w_diff || (e.changedTouches[0].clientX - bx.left) * w_diff
                            const y = (e.offsetY) * h_diff || (e.changedTouches[0].clientY - bx.top) * h_diff

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
                                const width = parseInt(getComputedStyle(canvasRef.current).width.split('px')[0])
                                const height = parseInt(getComputedStyle(canvasRef.current).height.split('px')[0])
                                const w_diff = 500 / width
                                const h_diff = 500 / height
                                const x = (e.offsetX) * w_diff || (e.changedTouches[0].clientX - bx.left) * w_diff
                                const y = (e.offsetY) * h_diff || (e.changedTouches[0].clientY - bx.top) * h_diff
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
            }
        const checkbox_fill_color = document.getElementById('checkbox_fill_color')
        const checkbox_stroke_color = document.getElementById('checkbox_stroke_color')  
        const picker_fill_color = document.getElementById('picker_fill_color')
        const picker_stroke_color = document.getElementById('picker_stroke_color')  


        const picker_background_color = document.getElementById('picker_background_color')  
        const checkbox_background_color = document.getElementById('checkbox_background_color')  

        picker_background_color.addEventListener('input', (event) => {
            background_color = picker_background_color.value
            draw(context)
        })
        checkbox_background_color.addEventListener('change', (event) => {
            background = checkbox_background_color.checked
            draw(context)
        })

        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseup', handleMouseUp);  
        canvas.addEventListener('mousedown', handleMouseDown);  
        
        canvas.addEventListener('touchmove', handleMouseMove, false);
        canvas.addEventListener('touchend', handleMouseUp, false);  
        canvas.addEventListener('touchstart', handleMouseDown, false);  
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
        

    })

    class UNDO_BUTTON extends React.Component {
        constructor(props) {
            super(props);
            this.handleClick = this.handleClick.bind(this);
        }
        handleClick() {
            if (actions.length > 0) {
            redo.push(actions[actions.length - 1])
            actions.splice(-1)
            draw(canvasRef.current.getContext('2d'))
            }
        }
        render() {
            return (
        <button id="undo" onClick={() => this.handleClick()} className="Welcome profile_tool_bar_item_button">
            <FontAwesomeIcon icon={faUndo} className="Welcome profile_tool_bar_item v2" />
        </button>
            )
        }
    }
    class REDO_BUTTON extends React.Component {
        constructor(props) {
            super(props);
            this.handleClick = this.handleClick.bind(this);
        }
        handleClick() {
            if (redo.length > 0) {
            actions.push(redo[redo.length - 1])
            redo.splice(-1)
            draw(canvasRef.current.getContext('2d'))
            }
        }
        render() {
            return (
        <button id="redo" onClick={() => this.handleClick()} className="Welcome profile_tool_bar_item_button">
            <FontAwesomeIcon icon={faRedo} className="Welcome profile_tool_bar_item v2" />
        </button>
            )
        }
    }
    class TRASH_BUTTON extends React.Component {
        constructor(props) {
            super(props);
            this.handleClick = this.handleClick.bind(this);
        }
        handleClick() {
            redo = []
            actions = []
            draw(canvasRef.current.getContext('2d'))
        }
        render() {
            return (
        <button id="trash" onClick={() => this.handleClick()} className="Welcome profile_tool_bar_item_button"><svg className="Welcome profile_tool_bar_item" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
        </button>
            )
        }
    }
    class PEN_BUTTON extends React.Component {
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
    class CIRCLE_BUTTON extends React.Component {
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
    class SQUARE_BUTTON extends React.Component {
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
    class TEXT_BUTTON extends React.Component {
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
        <p className="Welcome T">T</p>
        </button>
            )
        }
    }
    class SLIDER extends React.Component {
        constructor(props) {
            super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            slider_val: '03'
        }
        }
        handleChange() {
            const slider = document.getElementById("stroke_width")
            if (slider.value < 10) {
                this.setState({ slider_val: '0' + slider.value })
            }
            else {
                this.setState({ slider_val: slider.value })
            }
            stroke_width = slider.value
        }
        render() {
            return (
                <>
                <p className="Welcome Slider_value">{this.state.slider_val}</p><input onChange={this.handleChange} type="range" min="1" max="50" defaultValue="3" className="Welcome Slider_1" id="stroke_width"></input>
                </>
            )
        }
    }
    class ELEMENTS extends React.Component {
        constructor(props) {
        super(props);
        this.state = {
            elements_number: 0
        }
        }
        componentDidMount() {
            const count = () => {
                if (actions.length < 100) {
                this.setState({ elements_number: actions.length + 1})
                }
            }
            const count_2 = () => {
                this.setState({ elements_number: 0})
            }
            const count_3 = () => {
                if (actions.length > 0) {
                this.setState({ elements_number: actions.length - 1})
                }
                else {
                    this.setState({ elements_number: 0})
                }
            }

        document.getElementById("canvas").addEventListener('mousedown', count)
        document.getElementById("trash").addEventListener('mousedown', count_2)
        document.getElementById("undo").addEventListener('mousedown', count_3)
        document.getElementById("redo").addEventListener('mousedown', count)
        document.getElementById("canvas").addEventListener('touchstart', count)
        document.getElementById("trash").addEventListener('touchstart', count_2)
        document.getElementById("undo").addEventListener('touchstart', count_3)
        document.getElementById("redo").addEventListener('touchstart', count)
    }
        render() {
            return (
                <>
                    <p className="Welcome profile_tool_bar_titles">Layers : {this.state.elements_number} / 100</p>
                </>
            )
        }
    }
    class REMOVE_ELEMENT extends React.Component {
            click = () => {
                actions.splice(this.props.index, 1);
                draw(canvasRef.current.getContext('2d'))
                this.props.count_elements()
            }
            render() {
                return (
            <button key={"button_" + this.props.index} id="trash" onClick={() => this.click()} className="Welcome profile_tool_bar2_item_button"><svg className="Welcome profile_tool_bar_item" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            </button>
                )
            }
        }
        
        class SHOW_TOOLBAR extends React.Component {
            click = () => {
                const tool_bar = document.getElementById("tool_bar_colors")
                if (tool_bar.style.display === 'block') {
                    tool_bar.style.display = 'none'
                }
                else {
                    tool_bar.style.display = 'block'
                }
            }
            render() {
                return (
            <button key={"button_" + this.props.index} id="trash" onClick={() => this.click()} className="Welcome profile_tool_bar_color_show">
                <FontAwesomeIcon icon={faPalette} className="Welcome profile_tool_bar_color_show_icon" />
            </button>
                )
            }
        }
        class UP_ELEMENT extends React.Component {
            click = () => {
                if (this.props.index !== 0) {
                array_move(actions, this.props.index, this.props.index - 1);
                draw(canvasRef.current.getContext('2d'))
                this.props.count_elements()
                }
            }
            render() {
                return (
            <button key={"button_" + this.props.index} id="trash" onClick={() => this.click()} className="Welcome profile_tool_bar2_item_button"><svg className="Welcome profile_tool_bar_item" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
</svg>
            </button>
                )
            }
        }
        class DOWN_ELEMENT extends React.Component {
            click = () => {
                if (this.props.index !== (actions.length - 1)) {
                array_move(actions, this.props.index, this.props.index + 1);
                draw(canvasRef.current.getContext('2d'))
                this.props.count_elements()
                }
            }
            render() {
                return (
            <button key={"button_" + this.props.index} id="trash" onClick={() => this.click()} className="Welcome profile_tool_bar2_item_button"><svg className="Welcome profile_tool_bar_item" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
</svg>
            </button>
                )
            }
        }
        class VIEW extends React.Component {
            click = () => {
                const ctx = canvasRef.current.getContext('2d')
                const element = this.props.element
                const tool_type = element[5]
                if (tool_type === 0 || tool_type === 1 ||tool_type === 2) {
                const x = element[0]
                const y = element[1]
                if (tool_type === 0) {
                    const color = invertColor(element[4])
                    ctx.lineWidth = element[6]
                    ctx.strokeStyle = color
                    ctx.beginPath()
                    ctx.moveTo(element[2], element[3]);
                    ctx.lineTo(x, y);
                    ctx.stroke()
                }
                else {
                    if (tool_type === 1) {
                        ctx.strokeStyle = invertColor(element[4][1])
                        ctx.lineWidth = element[4][4]
                        ctx.fillStyle = invertColor(element[4][0])
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
                        ctx.strokeStyle = invertColor(element[4][1])
                        ctx.lineWidth = element[4][4]
                        ctx.fillStyle = invertColor(element[4][0])
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
                setTimeout(() => {
                    draw(canvasRef.current.getContext('2d'))
                }, 1000)
            }
            render() {
                return (
            <button key={"button_" + this.props.index} id="trash" onClick={() => this.click()} className="Welcome profile_tool_bar2_item_button"><svg className="Welcome profile_tool_bar_item" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
</svg>
            </button>
                )
            }
        }
    class ELEMENTS_LIST extends React.Component {
        constructor(props) {
        super(props);
        this.state = {
            elements: []
        }
        this.count_elements = this.count_elements.bind(this);
        }
        count_elements () {
                this.setState({ elements: actions })
        }
        componentDidMount() {
            
            const count = () => {
                setTimeout(() => {
                    this.setState({ elements: actions})
                }, 300)
            }

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
                const requestOptions2 = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: `{"username":"${username}", "password":"${password}"}`
            };
            fetch(`https://backend.heyko.fr/requests/user_exists`, requestOptions2)
                .then(response => response.json())
                .then(data => {
                    if (data.exists === true) {
                    const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: `{"user_id":"${data.id}"}`
                };
                fetch(`https://backend.heyko.fr/requests/get_user_avatar`, requestOptions)
                    .then(response => response.json())
                    .then(data2 => load_profile(data2))  
            }
            })
            }
        
            function load_profile(data) {
                console.log(data)
                if (data.user_image) {
                    data.user_image.forEach(element => {
                        if (Array.isArray(element)) {
                            actions.push(element)
                        }
                        else {
                            background = true
                            background_color = element
                            document.getElementById("checkbox_background_color").checked = true
                            document.getElementById("picker_background_color").value = element
                        }
                        draw(canvasRef.current.getContext('2d'))
                        count()
                    });
                }
            }
            

        document.getElementById("canvas").addEventListener('touchend', count)
        document.getElementById("trash").addEventListener('touchstart', count)
        document.getElementById("undo").addEventListener('touchstart', count)
        document.getElementById("redo").addEventListener('touchstart', count) 
        document.getElementById("canvas").addEventListener('mouseup', count)
        document.getElementById("trash").addEventListener('mousedown', count)
        document.getElementById("undo").addEventListener('mousedown', count)
        document.getElementById("redo").addEventListener('mousedown', count) 
    }
        render() {
            const test = (element) => {
                var type = "none"
                const tool_type = element[5]
                if (tool_type === 0) {
                    type = "Line"
                }
                if (tool_type === 1) {
                    type = "Circle"
                }
                if (tool_type === 2) {
                    type = "Square"
                }
                return type;
            }
            const colors = (element) => {
                var results = "none"
                const tool_type = element[5]
                if (tool_type === 0) {
                    results = <div style={{background:element[4]}} className="Welcome profile_tool_bar_elements_color"></div>
                }
                if (tool_type === 1 || tool_type === 2) {
                    if (element[4][2] && element[4][3]) {
                        results = <>
                        <div style={{background:element[4][0]}} className="Welcome profile_tool_bar_elements_color"></div>
                        <div style={{background:element[4][1]}} className="Welcome profile_tool_bar_elements_color"></div>
                        </>
                    }
                    else {
                        if (element[4][2]) {
                            results = <div style={{background:element[4][0]}} className="Welcome profile_tool_bar_elements_color"></div>
                        }
                        if (element[4][3]) {
                            results = <div style={{background:element[4][1]}} className="Welcome profile_tool_bar_elements_color"></div>
                        }
                    }
                }
                return results;     
            }
            return (
                <>
                    <div className="Welcome profile_tool_bar_elements_contener">
                        {this.state.elements.map((element, index) => 
                        <div className="Welcome profile_tool_bar_elements_breaker" key={"element_" + index}>
                        <REMOVE_ELEMENT count_elements={this.count_elements} element={element} index={index} />
                        <UP_ELEMENT count_elements={this.count_elements} element={element} index={index} />
                        <DOWN_ELEMENT count_elements={this.count_elements} element={element} index={index} />
                        <VIEW element={element} index={index} />
                            {colors(element)}
                            <p className="Welcome profile_tool_bar_item_text" key={"text_" + index}>{
                                test(element)
                            }</p>
                            </div>
                        )}
                    </div>
                </>
            )
        }
    }
    function next() {
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
        var final_array = actions
        if (background) {
        final_array.push(background_color)
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: `{"username":"${username}","password":"${password}", "image":${JSON.stringify(actions)}}`
        };
        fetch(`https://backend.heyko.fr/requests/save_profile_image`, requestOptions)
            .then(response => response.json())
            .then(data => save_result(data))  
            
            function save_result(data) {
                console.log(data)
                if (window.location.href.split("/welcome").length > 1) {
                window.location = 'welcome/end';
                }
                else {
                    history.push("../profile")
                }
            }
        
        }
    return <>
    <div>
    <SHOW_TOOLBAR />
    <button onClick={() => next()} className="button ok Welcome finish_button">Finish</button>
    <div id="tool_bar_colors" className="Welcome profile_tool_bar_colors">
    <input defaultChecked={true} id="checkbox_fill_color" type="checkbox" className="Welcome Color_Checkbox"></input><p className="Welcome profile_tool_bar_titles">Fill color</p>
        <input id="picker_fill_color" defaultValue="#353535" type="color" className="Welcome Color_picker"></input>
            
            <hr></hr>
            <input id="checkbox_stroke_color" type="checkbox" className="Welcome Color_Checkbox"></input>
            <p className="Welcome profile_tool_bar_titles">Outline</p><br></br>
            <p className="Welcome profile_tool_bar_titles">Line color</p>
    <input id="picker_stroke_color" defaultValue="#2ea0e8" type="color" className="Welcome Color_picker"></input>
        <p className="Welcome profile_tool_bar_titles">Line width</p>
        <SLIDER />
        <hr></hr>
        <input id="checkbox_background_color" type="checkbox" className="Welcome Color_Checkbox"></input>
            <p className="Welcome profile_tool_bar_titles">Background color</p><br></br>
            <input id="picker_background_color" defaultValue="#7CD8FF" type="color" className="Welcome Color_picker"></input>
    </div>

    <canvas width="500px" height="500px" className="Welcome Canvas" id="canvas"
        tabIndex={0} ref={canvasRef} />
    <div className="Welcome profile_tool_bar">
<TRASH_BUTTON />
<UNDO_BUTTON />
<REDO_BUTTON />
<PEN_BUTTON />
<CIRCLE_BUTTON />
<SQUARE_BUTTON />
{/*<TEXT_BUTTON />*/}
</div>

<div className="Welcome profile_tool_bar_elements">
    <ELEMENTS />
            <hr></hr>
    <ELEMENTS_LIST />
    </div>
    </div>
        </>
        
    }


    function array_move(arr, old_index, new_index) {
        if (new_index >= arr.length) {
            var k = new_index - arr.length + 1;
            while (k--) {
                arr.push(undefined);
            }
        }
        arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
        return arr;
    };
    function invertColor(hex, bw) {
        if (hex.indexOf('#') === 0) {
            hex = hex.slice(1);
        }
        if (hex.length === 3) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        if (hex.length !== 6) {
            throw new Error('Invalid HEX color.');
        }
        var r = parseInt(hex.slice(0, 2), 16),
            g = parseInt(hex.slice(2, 4), 16),
            b = parseInt(hex.slice(4, 6), 16);
        if (bw) {
            return (r * 0.299 + g * 0.587 + b * 0.114) > 186
                ? '#000000'
                : '#FFFFFF';
        }
        r = (255 - r).toString(16);
        g = (255 - g).toString(16);
        b = (255 - b).toString(16);
        return "#" + padZero(r) + padZero(g) + padZero(b);
    }
    function padZero(str, len) {
        len = len || 2;
        var zeros = new Array(len).join('0');
        return (zeros + str).slice(-len);
    }

    export default MapCanvas