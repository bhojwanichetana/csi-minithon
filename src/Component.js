import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import arrivalVideo from "./arrival6.png";
import car1 from "./img/1.jpg";
import car2 from "./img/2.jpg";
import car3 from "./img/3.jpg";

function SplashComponent({ setRoute }) {
  return (
    <div className="SplashWrapper cyber-glitch-0">
      <h1 className="cyber-glitch-0">GlowGo</h1>

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

function ArrivalComponent({ setRoute, route }) {
  return (
    <div className="ArrivalWrapper cyber-glitch-0">
      <img src={arrivalVideo} style={{ width: "30rem", height: "20rem" }} />
      <h5>
        Driver Name: Max Velocity <br></br>Driver ID: DRV1234<br></br> Contact
        Number: +1 (555) 123-4567 <br></br>Driver Rating: 4.8 <br></br>Vehicle:
        CyberSpeeder 9000 <br></br>License Plate: FTRNDRV <br></br>Driver's
        Location: NeoCity, Sector 42
      </h5>
      <button
        className="btn cyber-glitch-0"
        onClick={() => {
          setRoute("thank");
        }}
      >
        <span className="btn__content">Finish</span>
      </button>
    </div>
  );
}
function BookingComponent({ setRoute }) {
  const [source, setSource] = React.useState("");
  const [destination, setDestination] = React.useState("");
  return (
    <div className="BookingWrapper cyber-glitch-0">
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

function ThanksComponent({ setRoute }) {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  // Handle Rating Change
  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  // Handle Feedback Change
  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  // Handle Form Submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can send the rating and feedback data to your server here
  };

  return (
    <div className="cyberpunk-thank-you cyber-glitch-0">
      <h2>Thank You for Using Our Future Transport Service!</h2>
      <p>
        We hope you had an amazing ride. Please rate your experience and provide
        feedback below.
      </p>

      {/* Star Rating */}
      <div className="star-rating">
        <p>Your Rating:</p>
        <div className="stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <label key={star}>
              <input
                type="radio"
                name="rating"
                value={star}
                checked={star === rating}
                onChange={handleRatingChange}
              />
              ★
            </label>
          ))}
        </div>
      </div>

      {/* Feedback Form */}
      <form onSubmit={handleSubmit}>
        <div className="feedback">
          <label>Your Feedback:</label>
          <textarea
            rows="4"
            cols="50"
            value={feedback}
            onChange={handleFeedbackChange}
          ></textarea>
        </div>

        <button
          className="btn cyber-glitch-0"
          onClick={() => {
            setRoute("");
          }}
        >
          <span className="btn__content">Submit</span>
        </button>
      </form>
    </div>
  );
}

function Component({ route, setRoute }) {
  if (route === "") return <SplashComponent setRoute={setRoute} />;
  if (route === "booking") return <BookingComponent setRoute={setRoute} />;
  if (route === "arrival")
    return <ArrivalComponent setRoute={setRoute} route={route} />;
  if (route === "thank") return <ThanksComponent setRoute={setRoute} />;
  return <div>Component</div>;
}

export default Component;
