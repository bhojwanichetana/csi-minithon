import React from 'react';
import './Booking.css'; // Import your CSS file for styling

class BookingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      source: '',
      destination: '',
      cars: [
        { name: 'Car A', price: 50 },
        { name: 'Car B', price: 60 },
        { name: 'Car C', price: 70 },
      ],
    };
  }

  // Define functions to handle source and destination input changes

  render() {
    return (
      <div className="booking-page">
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
        <div className="car-options">
          <h2>Available Cars</h2>
          <ul>
            {this.state.cars.map((car, index) => (
              <li key={index}>
                {car.name} - ${car.price}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default BookingPage;
