import "./HeroImgStyle.css"
import IntroImg from "../assets/pic5.png"

import { Link } from "react-router-dom"
import Typewriter from 'typewriter-effect';

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="introImg" />
      </div>
      <div className="content">
        <h2>Hi, I am Suhag Rana.</h2>
        <p>
          <span>
            <Typewriter
              options={{
                strings: ['Frontend', 'React'],
                autoStart: true,
                loop: true,
              }}
            />
          </span> Developer.
        </p>
        <div className="btns">
          <Link className="btn" to="/project">Projects</Link>
          <Link className="btn btn-light" to="">Resume</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg