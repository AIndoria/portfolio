import React from "react";
import ReactDOM from "react-dom";
import "./stylesheets/Landing.scss";
import Avatar from "@material-ui/core/Avatar";
import Indoria from "./img/Indoria.png";
import AppBar from "./Appbar";

function App() {
  return (
    <div className="App">
      <span className="tiltedEffect"></span>
      <span className="tiltedEffect"></span>
      <span className="tiltedEffect"></span>
      <span className="tiltedEffect"></span>
      <span className="tiltedEffect"></span>
      <div className="intro">
        <div className="intro_Avatar">
          <Avatar
            alt="Abe Indoria"
            src={Indoria}
            style={{ height: "50px", width: "50px" }}
          />
        </div>
        <div className="intro__Title">
          <div>Abe Indoria</div>
        </div>
        <div className="intro__Subtitle">
          <p>
            I am a Frontend developer specializing in ReactJS. I have 3+ years
            of experience with UI/UX design and website development. I read, and
            I am fascinated by ancient Roman history.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="intro-p1">
          <p>
            Autonomous Dependent States is a popular mod for Paradox grand
            strategy game Crusader Kings II. It currently holds a 5-star rating
            on the Steam Workshop.
          </p>
        </div>
        <div className="card">
          {/* <h2>ADS</h2> */}
          <i className="fas fa-arrow-right"></i>
          <p>Automonous Dependent States</p>
          <div className="pic"></div>
          <div className="social">
            <a
              href="https://steamcommunity.com/sharedfiles/filedetails/?id=1665029657"
              alt="steam workshop link for Autonomous Dependent States"
            >
              <i className="fab fa-steam fa-2x"></i>
            </a>
            <a
              href="https://github.com/AIndoria/Autonomous-Dependent-States"
              alt="Github link for Autonomous Dependent States"
            >
              <i className="fab fa-github fa-2x"></i>
            </a>
          </div>

          <a
            href="https://github.com/AIndoria/Autonomous-Dependent-States"
            alt="Github link for Autonomous Dependent States"
          >
            <button></button>
          </a>
        </div>
        <div className="intro-p1 intro-p2">
          <p>
            Felicity is a currency exchange portal created in ReactJS which
            shows up-to-date information on current major FX currency pairs.
            Data is accessed from the EU Bank.
          </p>
        </div>
        <div className="card card2">
          {/* <h2>Felicity</h2> */}
          <i className="fas fa-arrow-right"></i>
          <p>Felicity</p>
          <div className="pic"></div>

          <div className="social">
            <a
              href="https://blog.aindoria.com/felicity"
              alt="Website link for Felicity"
            >
              <i className="fab fa-edge fa-2x"></i>
            </a>
            <a
              href="https://github.com/AIndoria/felicity"
              alt="Github link for Felicity"
            >
              <i className="fab fa-github fa-2x"></i>
            </a>
          </div>
          <button></button>
        </div>
        <div className="intro-p1 intro-p3">
          <p>
            SPQR is a government portal for the government of the Roman Republic
            circa 66BC. It is created in the image of{" "}
            <a
              href="https://usa.gov"
              alt="Government Portal for United States Government"
            >
              USA.gov
            </a>
            . It's a work in progress.
          </p>
        </div>
        <div className="card card3">
          {/* <h2>Felicity</h2> */}
          <i className="fas fa-arrow-right"></i>
          <p>Res Publica Romana</p>
          <div className="pic"></div>

          <div className="social">
            <a
              href="https://blog.aindoria.com/spqr"
              alt="Website link for Res Publica Romana"
            >
              <i className="fab fa-edge fa-2x fab-darken"></i>
            </a>
            <a
              href="https://github.com/AIndoria/ResPublicaRomana/"
              alt="Github link for Res Publica Romana"
            >
              <i className="fab fa-github fa-2x fab-darken"></i>
            </a>
          </div>
          <button></button>
        </div>
        <div className="intro-p1 intro-p4">
          <p>
            Wikipedia Client was one of the first "websites" I ever built for
            FreeCodeCamp. I usually leave it here just to judge my progress.
          </p>
        </div>
        <div className="card card4">
          {/* <h2>Felicity</h2> */}
          <i className="fas fa-arrow-right"></i>
          <p>Wikipedia Client</p>
          <div className="pic"></div>

          <div className="social">
            <a
              href="https://blog.aindoria.com/wikipedia-client/"
              alt="Website link for Wikipedia Client"
            >
              <i className="fab fa-edge fa-2x fab-darken"></i>
            </a>
            <a
              href="https://github.com/AIndoria/wikipedia-client/"
              alt="Github link for Wikipedia Client"
            >
              <i className="fab fa-github fa-2x fab-darken"></i>
            </a>
          </div>
          <button></button>
        </div>
        <div className="intro-p1 intro-p5">
          <p>
            Is ISS Over You was an interesting project. I learned about using
            Canvas element alongside doing calculations for the geolocations
            API.
          </p>
        </div>
        <div className="card card5">
          {/* <h2>Felicity</h2> */}
          <i className="fas fa-arrow-right"></i>
          <p>Is ISS Over You</p>
          <div className="pic"></div>

          <div className="social">
            <a
              href="https://blog.aindoria.com/is-iss-over-you/"
              alt="Website link for ISS Client"
            >
              <i className="fab fa-edge fa-2x fab-darken"></i>
            </a>
            <a
              href="https://github.com/AIndoria/is-iss-over-you/"
              alt="Github link for ISS Client"
            >
              <i className="fab fa-github fa-2x fab-darken"></i>
            </a>
          </div>
          <button></button>
        </div>
      </div>
      <AppBar></AppBar>
    </div>
  );
}

export default App;
