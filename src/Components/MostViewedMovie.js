import Star from "../img/star.svg";
import { Link } from "react-router-dom";

const MostViewedMovie = ({ number, title, image, rating }) => {
  return (
    <div class="card mostviewed-card mb-3 border-0">
      <div class="row g-0">
        <div className="col-md-2">
          <h3 className="mostviewed-card-number">{number}</h3>
        </div>
        <div class="col-md-3">
          <Link className="mostviewed-link" to="/detail">
            <img src={image} class="img-fluid rounded-3 mostviewed-card-poster" alt="poster" />
          </Link>
        </div>
        <div class="col-md-7">
          <div class="card-body py-0">
            <h5 class="card-title mostviewed-card-title">{title}</h5>
            <p class="card-text mostviewed-card-rating">
              <img src={Star} className="img-star" alt="rating" />
              {rating}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MostViewedMovie;