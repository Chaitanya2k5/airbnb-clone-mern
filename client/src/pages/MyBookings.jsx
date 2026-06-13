import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./MyBookings.css";

function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:5000/api/bookings/my-bookings",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setBookings(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="my-bookings-page">
  <div className="bookings-container">
      <button
  className="home-btn"
  onClick={() => navigate("/")}
>
  ← Home
</button>

      <h1 className="bookings-title">
  My Bookings
</h1>

<p className="bookings-subtitle">
  View and manage your reservations
</p>
      

      {bookings.length === 0 ? (
        <h3>No bookings found</h3>
      ) : (
        bookings.map((booking) => (
          <div
  key={booking._id}
  className="booking-card"
>
            <img
  src={booking.property.image}
  alt={booking.property.title}
  style={{
    width: "100%",
    height: "250px",
    objectFit: "cover",
    borderRadius: "15px",
    marginBottom: "15px",
  }}
/>
            <div className="booking-content">

            <h2>{booking.property.title}</h2>

            <p>📍 {booking.property.location}</p>

            <p>💰 ₹{booking.totalPrice}</p>

            <p>
              Check In:{" "}
              {new Date(
                booking.checkInDate
              ).toLocaleDateString()}
            </p>

            <p>
              Check Out:{" "}
              {new Date(
                booking.checkOutDate
              ).toLocaleDateString()}
            </p>

            <p>Status: {booking.status}</p>
          </div>
          </div>
        ))
      )}
    </div>
      </div>
  );
}

export default MyBookings;