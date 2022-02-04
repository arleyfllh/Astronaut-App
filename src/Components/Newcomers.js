import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper";
import NewcomersMovie from "./NewcomersMovie";
import PosterMLFAS from "../img/MLFAS.jpg";
import PosterSR from "../img/SR.jpg";
import PosterGOB from "../img/GOBLIN.jpg";
import PosterSU from "../img/SU.jpg";
import PosterVIN from "../img/VINCEN.jpg";
import PosterVAGA from "../img/VAGA.jpg";

const Newcomers = () => {
  return (
    <Swiper
      modules={[FreeMode]}
      spaceBetween={5}
      slidesPerView={2}
      freeMode={true}
      className="mySwiper"
    >
      <SwiperSlide>
        <NewcomersMovie title={"My Love from Another Star"} image={PosterMLFAS} rating={"8.0"}/>
      </SwiperSlide>
      <SwiperSlide>
        <NewcomersMovie title={"Sweet Romance"} image={PosterSR} rating={"8.0"}/>
      </SwiperSlide>
      <SwiperSlide>
        <NewcomersMovie title={"Goblin"} image={PosterGOB} rating={"8.0"}/>
      </SwiperSlide>
      <SwiperSlide>
        <NewcomersMovie title={"Start Up"} image={PosterSU} rating={"8.0"}/>
      </SwiperSlide>
      <SwiperSlide>
        <NewcomersMovie title={"Vincenzo"} image={PosterVIN} rating={"8.0"}/>
      </SwiperSlide>
      <SwiperSlide>
        <NewcomersMovie title={"Vagabond"} image={PosterVAGA} rating={"8.0"}/>
      </SwiperSlide>
    </Swiper>
  );
};

export default Newcomers;
