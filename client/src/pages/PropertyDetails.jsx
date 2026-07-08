import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import API from "../api";

function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [property, setProperty] = useState(null);
  
  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const res = await axios.get(
          `${API}/api/properties/${id}`
        );

        setProperty(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProperty();
  }, [id]);

  const bookProperty = async () => {
    try {
      const token = localStorage.getItem("token");

      const bookingData = {
        propertyId: property._id,
        checkInDate: "2026-07-01",
        checkOutDate: "2026-07-05",
        totalPrice: property.price,
      };

      await axios.post(
  `${API}/api/bookings`,
  bookingData,
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);

alert("Booking Successful");
navigate("/my-bookings");

window.location.href = "/my-bookings";
    } catch (error) {
      console.error(error);
      alert("Booking Failed");
    }
  };

  if (!property) {
    return <h2>Loading...</h2>;
  }

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      <img
        src={property.image}
        alt={property.title}
        style={{
          width: "100%",
          height: "500px",
          objectFit: "cover",
          borderRadius: "20px",
          marginBottom: "30px",
        }}
      />

      <div
        style={{
          display: "flex",
          gap: "40px",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            flex: 2,
          }}
        >
          <h1
            style={{
              marginBottom: "10px",
            }}
          >
            {property.title}
          </h1>

          <p
            style={{
              fontSize: "18px",
              color: "#666",
            }}
          >
            📍 {property.location}
          </p>

          <div
            style={{
              marginTop: "30px",
            }}
          >
            <h2>About this stay</h2>

            <p
              style={{
                lineHeight: "1.8",
                color: "#555",
              }}
            >
              {property.description}
            </p>
          </div>

          <div
            style={{
              marginTop: "30px",
            }}
          >
            <h2>What this place offers</h2>

            <p>🏖️ Beach Access</p>
            <p>📶 Free WiFi</p>
            <p>🚗 Free Parking</p>
            <p>❄️ Air Conditioning</p>
            <p>🍽️ Fully Equipped Kitchen</p>
          </div>
        </div>

        <div
          style={{
            flex: 1,
            border: "1px solid #ddd",
            borderRadius: "20px",
            padding: "25px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            position: "sticky",
            top: "100px",
          }}
        >
          <h2
            style={{
              color: "#ff385c",
              marginBottom: "20px",
            }}
          >
            ₹{property.price}
            <span
              style={{
                fontSize: "16px",
                color: "#666",
              }}
            >
              {" "}
              / night
            </span>
          </h2>

          <button
            onClick={bookProperty}
            style={{
              width: "100%",
              padding: "15px",
              background: "#ff385c",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            Reserve Now
          </button>

          <p
            style={{
              marginTop: "15px",
              textAlign: "center",
              color: "#777",
            }}
          >
            You won't be charged yet
          </p>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetails;
