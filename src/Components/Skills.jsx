import './SkillsStyle.css'

const Skills = () => {
  return (
    <>
      <div className='container'>
        <h1>Skills I have</h1>
        <div className="skills">
          <div className="skill-box">
            <span className="title">HTML</span>
            <div className='skill-bar'>
              <span className="skill-per html">
                <span className="tooltip">90%</span>
              </span>
            </div>
          </div>

          <div className="skill-box">
            <span className="title">Css <span className='flex-grid'>(+flexbox, grid)</span></span>
            <div className='skill-bar'>
              <span className="skill-per css">
                <span className="tooltip">65%</span>
              </span>
            </div>
          </div>

          <div className="skill-box">
            <span className="title">Sass</span>
            <div className='skill-bar'>
              <span className="skill-per sass">
                <span className="tooltip">90%</span>
              </span>
            </div>
          </div>

          <div className="skill-box">
            <span className="title">Tailwind Css</span>
            <div className='skill-bar'>
              <span className="skill-per tailwind">
                <span className="tooltip">60%</span>
              </span>
            </div>
          </div>

          <div className="skill-box">
            <span className="title">Javascript</span>
            <div className='skill-bar'>
              <span className="skill-per js">
                <span className="tooltip">70%</span>
              </span>
            </div>
          </div>

          <div className="skill-box">
            <span className="title">ReactJs</span>
            <div className='skill-bar'>
              <span className="skill-per react">
                <span className="tooltip">70%</span>
              </span>
            </div>
          </div>

          <div className="skill-box">
            <span className="title">Git and Github</span>
            <div className='skill-bar'>
              <span className="skill-per git">
                <span className="tooltip">60%</span>
              </span>
            </div>
          </div>

          <div className="skill-box">
            <span className="title">Python</span>
            <div className='skill-bar'>
              <span className="skill-per python">
                <span className="tooltip">40%</span>
              </span>
            </div>
          </div>

          <div className="skill-box">
            <span className="title">Photoshop</span>
            <div className='skill-bar'>
              <span className="skill-per photoshop">
                <span className="tooltip">40%</span>
              </span>
            </div>
          </div>

          <div className="skill-box">
            <span className="title">Typing Speed</span>
            <div className='skill-bar'>
              <span className="skill-per typing">
                <span className="tooltip">45+ wpm</span>
              </span>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Skills