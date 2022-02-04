import MostViewed from "./MostViewed";
import Newcomers from "./Newcomers";

const Main = () => {
  return (
    <div className="main-content">
      <div className="container main-container px-5">
        <div className="row">
          <div className="col-md-7">
            <div className="newcomers-title">
              NEWCOMERS
            </div>
            <div className="container newcomers-container p-0 py-3">
              <Newcomers />
            </div>
          </div>
          <div className="col-md-5">
            <div className="mostviewed-title">
              MOST VIEWED MOVIE
            </div>
            <div className="container mostv-container p-0 py-3">
              <MostViewed />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Main;
