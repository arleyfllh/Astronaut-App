import Star from "../img/star.svg";
import { Link } from "react-router-dom";

const BigScreenMovie = ({ title, desc, rating, backdrop }) => {
  return (
    <Link className="big-link" to="/detail">
      <div
        className="big-backdrop"
        style={{ backgroundImage: `url(${backdrop})` }}
      >
        <div className="container-fluid big-movie-container px-5">
          <div className="top-picks">TOP PICKS</div>
          <div className="info-container">
            <div className="row">
              <div className="col-md-8">
                <h1>{title}</h1>
                <p>{desc}</p>
                <span>
                  <button className="btn big-button big-button-view">
                    View Info
                  </button>
                </span>
                <span>
                  <button className="btn big-button">Watch Trailer</button>
                </span>
                <span>
                  <button className="btn big-button">+ Watchlist</button>
                </span>
                <span>
                  <img src={Star} className="img-star" />
                  {rating}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BigScreenMovie;
