import React from 'react';
import './Branding.css';


function Footer() {
    return(
   <>
     <div className="content-slider">
        <div className="slider">
        <div className="Strip_1"></div>
        <div className="Strip_2"></div>
        <div className="Strip_3"></div>
        <br></br><br></br><br></br><br></br><br></br>
        
            <h1 className="Home_Sub_Title" >
            <img className="Home Banner" src="img/heyko.png" alt="Heyko's Banner" width="450px"></img><br></br>
            Heyko's branding</h1>
        </div>


        <svg className="Home Separator" viewBox="0 0 1920 200" fill="#7CD8FF"><path d="M 0 200 L 1007 159 L 1007 0 L 0 0 Z" strokeWidth="0"></path> <path d="M 1006 159 L 1920 119 L 1920 0 L 1006 0 Z" strokeWidth="0"></path> </svg>
</div>
    <div className="colors">
    <p className="Title_2">🎨 Colors</p>
    <div className="Branding color_line">
    <div className="Branding color v1"></div>
    <p className="Branding Color_name">#353535</p>
    </div>
    <div className="Branding color_line">
    <div className="Branding color v2"></div>
    <p className="Branding Color_name">#737373</p>
    </div>
    <div className="Branding color_line">
    <div className="Branding color v3"></div>
    <p className="Branding Color_name">#7CD8FF</p>
    </div>
    <div className="Branding color_line">
    <div className="Branding color v4"></div>
    <p className="Branding Color_name">#2ea0e8</p>
    </div>
    </div>
    <p className="Title_2 v2">🖼️ Logos</p>
    <div className="Branding images">
    <div className="Branding image_contener">
    <img className="Branding image" src="img/banner.png" alt="Heyko's banner"></img>
    </div>
    </div>
   </>
    )
}

export default Footer