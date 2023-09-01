import React from 'react';
import './Booking.css'; // Import your CSS file for styling

class BookingPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        source: '',
        destination: '',
        cars: [
          { name: 'Hyper Ride', price: 500 },
          { name: 'Lunar Scoot', price: 600 },
          { name: 'Power Pedal', price: 700 },
        ],
      };
    }
  
    // Define functions to handle source and destination input changes
  
    render() {
      return (
        <div className="booking-page">
          <div className="top-section">
            <div className="source">
              <label>Source:</label>
              <input
                type="text"
                value={this.state.source}
                onChange={(e) => this.setState({ source: e.target.value })}
              />
            </div>
            <div className="destination">
              <label>Destination:</label>
              <input
                type="text"
                value={this.state.destination}
                onChange={(e) =>
                  this.setState({ destination: e.target.value })
                }
              />
            </div>
          </div>
          <div className="car-options">
            <h2>Available Cars</h2>
            <ul>
              {this.state.cars.map((car, index) => (
                <li key={index}>
                  {car.name} - ₹{car.price}
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }
  }
  
  export default BookingPage;