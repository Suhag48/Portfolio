import "./WorkProjectStyle.css"
import WorkCardData from "./WorkCardData"
import Work from "./Work"

const WorkProject = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects </h1>
        <div className="project-container">
            {WorkCardData.map((val, ind)=>{
                return(
                    <Work 
                        key={ind}
                        imgsrc={val.imgsrc}
                        title={val.title}
                        text={val.text}
                        view={val.view}
                        source={val.source}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default WorkProject