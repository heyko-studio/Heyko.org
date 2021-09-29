import React from 'react'
import './Footer.css';



function Footer() {
    return(
      <div className=" footer footer_contener">
          <div className="footer_line">
            <li className="footer line"><a href="https://discord.gg/tKypaXn" className="footer link">Discord</a></li>
            <li className="footer line"><a href="https://twitter.com/heyko_studio" className="footer link">Twitter</a></li>
            <li className="footer line"><a href="https://utip.io/heykostudio/" className="footer link">Utip</a></li>
            <li className="footer line"><a href="https://www.youtube.com/channel/UCCqpR17M4B4zdmx2BcSW76Q" className="footer link">Youtube</a></li>
            <li className="footer line"><a href="/informations" className="footer link">Details</a></li>
            </div>
        </div>
    )
}

export default Footer