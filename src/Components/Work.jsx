import { Link } from "react-router-dom"
import "./WorkProjectStyle.css"

const Work = (props) => {
  const {imgsrc, title, text, view, source} = props;
  return (
    <div className="project-card">
      <img src={imgsrc} alt="projectPic" />
      <div className="pro-details">
        <h2 className="pro-title">{title}</h2>
        <p className="pro-para">{text}</p>
        <div className="pro-btns">
          <Link to={view} target="_blank" className="btns">view website</Link>
          <Link to={source} target="_blank" className="btns">view code</Link>
        </div>
      </div>
    </div>
  )
}

export default Work
