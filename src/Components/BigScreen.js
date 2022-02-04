import BigScreenMovie from "./BigScreenMovie";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper";
import BackdropVIN from "../img/VINCEN-H2.jpg";
import BackdropGOB from "../img/GOBLIN-H.jpg";

const BigScreen = () => {
  return (
    <div className="big-screen">
      <div className="container-fluid py-5 px-0">
        <Swiper
          modules={[FreeMode]}
          spaceBetween={50}
          slidesPerView={1}
          freeMode={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <BigScreenMovie
              title={"Vincenzo"}
              desc={
                "At the age of 8, Park Joo-Hyeong went to Italy after he was adopted. He is now an adult and has the name of Vincenzo Cassano (Song Joong-Ki). He is a lawyer, who works for the Mafia as a consigliere. Because of a war between mafia groups, he flees to South Korea."
              }
              rating={"8.0"}
              backdrop={BackdropVIN}
            />
          </SwiperSlide>
          <SwiperSlide>
            <BigScreenMovie
              title={"Goblin"}
              desc={
                "At the age of 8, Park Joo-Hyeong went to Italy after he was adopted. He is now an adult and has the name of Vincenzo Cassano (Song Joong-Ki). He is a lawyer, who works for the Mafia as a consigliere. Because of a war between mafia groups, he flees to South Korea."
              }
              rating={"8.0"}
              backdrop={BackdropGOB}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default BigScreen;
