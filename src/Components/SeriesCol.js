import SeriesColMovie from "./SeriesColMovie";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper";
import PosterMLFAS from "../img/MLFAS.jpg";
import PosterSR from "../img/SR.jpg";
import PosterGOB from "../img/GOBLIN.jpg";
import PosterSU from "../img/SU.jpg";
import PosterVIN from "../img/VINCEN.jpg";
import PosterVAGA from "../img/VAGA.jpg";

const SeriesCol = () => {
  return (
    <div className="container series-container px-5 mt-5">
      <div className="series-title">SERIES COLLECTION</div>
      <div className="container series-movie-container p-0">
        <Swiper
        modules={[FreeMode]}
        spaceBetween={5}
        slidesPerView={4}
        freeMode={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <SeriesColMovie title={"My Love from Another Star"} image={PosterMLFAS} rating={"8.0"}/>
        </SwiperSlide>
        <SwiperSlide>
          <SeriesColMovie title={"Sweet Romance"} image={PosterSR} rating={"8.0"}/>
        </SwiperSlide>
        <SwiperSlide>
          <SeriesColMovie title={"Goblin"} image={PosterGOB} rating={"8.0"}/>
        </SwiperSlide>
        <SwiperSlide>
          <SeriesColMovie title={"Start Up"} image={PosterSU} rating={"8.0"}/>
        </SwiperSlide>
        <SwiperSlide>
          <SeriesColMovie title={"Vincenzo"} image={PosterVIN} rating={"8.0"}/>
        </SwiperSlide>
        <SwiperSlide>
          <SeriesColMovie title={"Vagabond"} image={PosterVAGA} rating={"8.0"}/>
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  );
};

export default SeriesCol;