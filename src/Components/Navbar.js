import logo from "../img/Group-77.svg";
import searchLogo from "../img/magnifying-glass.svg";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg bg-dark bg-opacity-75">
        <div className="container px-5">
          <img src={logo} alt="logo" style={{ height: 60, width: 42 }}></img>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <a className="nav-link" aria-current="page" href="#">
                MOVIES
              </a>
              <a className="nav-link" href="#">
                SERIES
              </a>
              <a className="nav-link" href="#">
                CATEGORIES
              </a>
              <a className="nav-link" href="#">
                WATCHLIST
              </a>
              <a className="nav-link" href="#">
                MY ACCOUNT
              </a>
              <img
                src={searchLogo}
                alt="logo"
                style={{ height: 22, width: 22, margin: 10 }}
              ></img>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
