import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import arrivalVideo from "./arrival2.mp4";
import car1 from "./img/1.jpg";
import car2 from "./img/2.jpg";
import car3 from "./img/3.jpg";
function SplashComponent({ setRoute }) {
  return (
    <div className="SplashWrapper">
      <h1 className="cyber-glitch-0">NotUber</h1>

      <button
        className="btn cyber-glitch-0"
        onClick={() => {
          setRoute("booking");
        }}
      >
        <span className="btn__content">Book a ride</span>
      </button>
    </div>
  );
}

function ArrivalComponent({ setRoute }) {
  setInterval(() => {
    setRoute("");
  }, 4000);
  return (
    <div className="ArrivalWrapper">
      <video src={arrivalVideo} autoPlay loop muted type="video/mp4" />
    </div>
  );
}

function BookingComponent({ setRoute }) {
  const [source, setSource] = React.useState("");
  const [destination, setDestination] = React.useState("");
  return (
    <div className="BookingWrapper">
      <div className="inputWrapper">
        <div className="source cyber-input">
          <input
            placeholder="Source"
            type="text"
            value={source}
            onChange={(e) => setSource(e.target.value)}
          />
        </div>
        <div className="destination cyber-input">
          <input
            type="text"
            placeholder="Destination"
            value={destination}
            onChange={(e) => {
              setDestination(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="car-options">
        <h2>Available Cars</h2>
        <div className="car-wrapper">
          {[car1, car2, car3].map((i, key) => {
            const name = `img${key}`;
            return (
              <div className="car-img-wrapper">
                <img src={i} className={name} />
              </div>
            );
          })}
        </div>
      </div>
      <button
        className="btn cyber-glitch-0"
        onClick={() => {
          setRoute("arrival");
        }}
      >
        <span className="btn__content">Book</span>
      </button>
    </div>
  );
}

function Component({ route, setRoute }) {
  if (route === "") return <SplashComponent setRoute={setRoute} />;
  if (route === "booking") return <BookingComponent setRoute={setRoute} />;
  if (route === "arrival") return <ArrivalComponent setRoute={setRoute} />;
  return <div>Component</div>;
}

export default Component;
