import { Link } from "react-router-dom";
import biglogo from "../img/Group-77.svg";
import hiddenpass from "../img/ic_eye_disable.svg";

const Page1 = () => {
  return (
    <div className="container-fluid login-container">
      <div className="row h-100">
        <div className="col-md-6">
          <div className="login-all">
            <img className="login-logo mb-3" src={biglogo}/>
            <h1 className="login-title mb-0">ASTRONAUT</h1>
            <h5 className="login-desc">Your Popcorn's Soulmate</h5>
          </div>
        </div>
        <div className="col-md-6">
          <div className="login-info">
            <h2 className="signin">SIGN IN</h2>
            <h5 className="signin-desc mb-5">Let's enjoy your popcorn while you are lay down!</h5>
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Username/Email" aria-label="Username" aria-describedby="basic-addon1" value="mavendigitalasia@testcoding.co.id" />
            </div>
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Password" aria-label="Recipient's username" aria-describedby="basic-addon2" />
              <span class="input-group-text" id="basic-addon2"><img className="hidden-pass-logo" src={hiddenpass}/></span>
            </div>
            <div className="forgot-pass">Forgot Password?</div>
            <Link to="/home">
              <button className="btn signin-button">Sign in</button>
            </Link>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Page1;