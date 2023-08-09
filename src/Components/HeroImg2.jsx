import "./HeroImg2Style.css"

const HeroImg2 = (props) => {
  const {heading, paragraph} = props
  return (
    <div>
        <div className="hero-img">
        </div>
        <div className="heading">
            <h1> {heading} </h1>
            <p> {paragraph} </p>
        </div>
    </div>
    
  )
}

export default HeroImg2