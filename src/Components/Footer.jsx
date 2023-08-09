import "./FooterStyle.css"

import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={18} style={{color: "#fff", marginRight:"1rem"}} />
                    <div>
                        <p>Manikgonj, Dhaka</p>
                        <p>Bangladesh</p>
                    </div>
                </div>
                <div className="phone">
                    <FaPhone size={18} style={{color: "#fff", marginRight: "1rem"}} />
                    <p>+8801930834700</p>
                </div>
                <div className="mail">
                    <FaMailBulk size={18} style={{color: "#fff", marginRight: "1rem"}} />
                    <p>Suhagrana.pw@gmail.com</p>
                </div>
            </div>

            <div className="right">
                <h4>Connect With Social Media</h4>
                <div className="social">
                    <FaFacebook size={20} style={{color:"#fff", marginRight:"1rem", cursor:"pointer"}} />
                    <FaLinkedin size={20} style={{color:"#fff", marginRight:"1rem", cursor:"pointer"}} />
                    <FaYoutube size={20} style={{color:"#fff", marginRight:"1rem", cursor:"pointer"}} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer