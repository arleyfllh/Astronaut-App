import Star from "../img/star.svg";

const SeriesColMovie = ({ image, title, rating }) => {
  return (
    <div className="container mt-4">
      <div className="card series-card border-0">
        <img src={image} className="card-img-top series-card-img-poster rounded-3" alt="poster" />
        <div className="card-body">
          <h5 className="card-title series-card-title">{title}</h5>
          <img className="img-star" src={Star} alt="rating" />
          <span className="series-card-rating">{rating}</span>
        </div>
      </div>
    </div>

  )
}

export default SeriesColMovie;