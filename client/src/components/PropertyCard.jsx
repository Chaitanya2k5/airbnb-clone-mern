import { Link } from "react-router-dom";

function PropertyCard({ property }) {
  return (
    <Link
      to={`/property/${property._id}`}
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div
        style={{
          width: "320px",
          borderRadius: "20px",
          overflow: "hidden",
          background: "#ffffff",
          boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
          transition: "all 0.3s ease",
          cursor: "pointer",
        }}
      >
        <img
          src={
            property.image ||
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6"
          }
          alt={property.title}
          style={{
            width: "100%",
            height: "240px",
            objectFit: "cover",
          }}
        />

        <div
          style={{
            padding: "18px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <h3
              style={{
                margin: 0,
                fontSize: "1.2rem",
              }}
            >
              {property.title}
            </h3>

            <span
              style={{
                color: "#ff385c",
                fontWeight: "bold",
              }}
            >
              ★ 4.9
            </span>
          </div>

          <p
            style={{
              color: "#666",
              marginBottom: "8px",
            }}
          >
            📍 {property.location}
          </p>

          <p
            style={{
              color: "#888",
              fontSize: "14px",
              marginBottom: "15px",
            }}
          >
            Premium stay with modern amenities and
            beautiful surroundings.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h2
              style={{
                margin: 0,
                color: "#ff385c",
              }}
            >
              ₹{property.price}
            </h2>

            <span
              style={{
                color: "#666",
                fontSize: "14px",
              }}
            >
              / night
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PropertyCard;