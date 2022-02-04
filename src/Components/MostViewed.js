import MostViewedMovie from "./MostViewedMovie";
import PosterSU from "../img/SU.jpg";
import PosterVIN from "../img/VINCEN.jpg";
import PosterVAGA from "../img/VAGA.jpg";

const MostViewed = () => {
  return (
    <div className="container p-0">
      <MostViewedMovie number={".01"} title={"Vincenzo"} image={PosterVIN} rating={"8.0"}/>
      <MostViewedMovie number={".02"} title={"Start Up"} image={PosterSU} rating={"8.0"}/>
      <MostViewedMovie number={".03"} title={"Vagabond"} image={PosterVAGA} rating={"8.0"}/>
    </div>
  )
}

export default MostViewed;