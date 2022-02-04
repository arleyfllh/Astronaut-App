import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper";
import BrowseTrailerCat from "./BrowseTrailerCat";
import CatHor from "../img/creepy-ghost.svg";
import CatRom from "../img/hearts.svg";
import CatThrill from "../img/knife.svg";
import CatCom from "../img/theater.svg";

const BrowseTrailer = () => {
  return (
    <div className="container browse-container px-5">
      <div className="browse-title">
        BROWSE TRAILER
      </div>
      <div className="browse-cat">
        <Swiper
          modules={[FreeMode]}
          spaceBetween={0}
          slidesPerView={4}
          freeMode={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <BrowseTrailerCat logo={CatHor} text={"HORROR"} background={"#00245A"}/>
          </SwiperSlide>
          <SwiperSlide>
            <BrowseTrailerCat logo={CatRom} text={"ROMANCE"} background={"#62105C"}/>
          </SwiperSlide>
          <SwiperSlide>
            <BrowseTrailerCat logo={CatThrill} text={"THRILLER"} background={"#401077"}/>
          </SwiperSlide>
          <SwiperSlide>
            <BrowseTrailerCat logo={CatCom} text={"COMEDY"} background={"#895E2A"}/>
          </SwiperSlide>
          <SwiperSlide>
            <BrowseTrailerCat logo={CatHor} text={"HORROR"} background={"#00245A"}/>
          </SwiperSlide>
          <SwiperSlide>
            <BrowseTrailerCat logo={CatRom} text={"ROMANCE"} background={"#62105C"}/>
          </SwiperSlide>
          <SwiperSlide>
            <BrowseTrailerCat logo={CatThrill} text={"THRILLER"} background={"#401077"}/>
          </SwiperSlide>
          <SwiperSlide>
            <BrowseTrailerCat logo={CatCom} text={"COMEDY"} background={"#895E2A"}/>
          </SwiperSlide>
        </Swiper>

      </div>

    </div>
  )
}

export default BrowseTrailer;