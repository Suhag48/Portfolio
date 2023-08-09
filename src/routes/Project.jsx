import HeroImg2 from "../Components/HeroImg2"
import PricingCard from "../Components/PricingCard"
import WorkProject from "../Components/WorkProject"


const Project = () => {
  return (
    <div>
      <HeroImg2 heading="PROJECTS." paragraph="Some of my recent works." />
      <WorkProject />
      <PricingCard />
    </div>
  )
}

export default Project