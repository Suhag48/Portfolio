import "./AboutCardStyle.css"

import {Link} from "react-router-dom"
import Suhag from "../assets/pic5.png"
import Suhag2 from "../assets/pic4.png"

const AboutCard = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who am I?</h1>
        <p>I am a react front end web developer. I create responsive secure websites fro my clients.</p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={Suhag} alt="true" className="img"/>
          </div>
          <div className="img-stack bottom">
            <img src={Suhag2} alt="true" className="img"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutCard