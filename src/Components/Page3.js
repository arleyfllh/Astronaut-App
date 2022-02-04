import { Link } from "react-router-dom";
import backButton from "../img/arrow-big.svg";
import backdrop from "../img/VINCEN-H2.jpg";
import Star from "../img/star.svg";
import Footer from "./Footer";


const Page3 = () => {
  return (
    <div className="container-fluid detail-container p-0">
      <div className="back-button">
        <Link to="/home">
          <img src={backButton}/>
        </Link>
      </div>
      <div className="container-fluid detail-trailer" style={{ backgroundImage: `url(${backdrop})` }}>
        <h2 className="trailer-title">Watch Trailer</h2>
        <div className="play-button">
          <div className="play"></div>
        </div>
      </div>
      <div className="detail-info">
        <div className="row">
          <div className="col-md-8">
            <h2 className="about-movie detail-title">ABOUT VINCENZO</h2>
            <p className="release-date">Release Date 20 Feb 2021 | 20eps | Comedy, Crime, Romance |</p>
            <h3 className="info-movie">CAST</h3>
            <p className="info-cast">Song Joong-ki, Jeon Yeo-bin, Taecyeon</p>
            <h3 className="info-movie">DIRECTOR</h3>
            <p className="info-dir">Hui-won Kim</p>
            <h3 className="info-movie">SYNOPSIS</h3>
            <p className="info-syn">At the age of 8, Park Joo-Hyeong went to Italy after he was adopted. He is now an adult and has the name of Vincenzo Cassano (Song Joong-Ki). He is a lawyer, who works for the Mafia as a consigliere. Because of a war between mafia groups, he flees to South Korea. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum porta. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh. Nulla quis lorem ut libero malesuada feugiat. Curabitur aliquet quam id dui posuere blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>

          </div>
          <div className="col-md-4">
            <h2 className="about-movie detail-title">RATE</h2>
            <div className="detail-rating">
              <img className="detail-star" src={Star} alt="rating" />
              <p className="detail-number-rating">8.0</p>
            </div>
            <p className="voters">199,203 voters</p>
            <button className="btn rating-button">Give Rating</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Page3;