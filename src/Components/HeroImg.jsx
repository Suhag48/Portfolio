import "./HeroImgStyle.css"
import IntroImg from "../assets/pic5.png"
import resume from "../assets/resume/Suhag_Rana-Frontend_Developer1.pdf"

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
          <a className="btn" href="/project">Projects</a>
          <a className="btn btn-light" href={resume}>Resume</a>
        </div>
      </div>
    </div>
  )
}

export default HeroImg