import Star from "../img/star.svg";
import { Link } from "react-router-dom";

const NewcomersMovie = ({ image, title, rating }) => {
  return (
    <Link className="newcomers-link" to="/detail">
      <div className="container">
        <div className="card newcomers-card border-0">
          <img src={image} className="card-img-top newcomers-card-img-poster rounded-3" alt="poster" />
          <div className="card-body">
            <h5 className="card-title newcomers-card-title">{title}</h5>
            <img className="img-star" src={Star} alt="rating" />
            <span className="newcomers-card-rating">{rating}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default NewcomersMovie;