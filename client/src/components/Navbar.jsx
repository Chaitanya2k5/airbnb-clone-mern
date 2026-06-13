import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 60px",
        background: "#ffffff",
        borderBottom: "1px solid #e5e5e5",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
        }}
      >
        <h2
          style={{
            color: "#ff385c",
            margin: 0,
            fontWeight: "700",
          }}
        >
          Airbnb Clone
        </h2>
      </Link>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "25px",
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#333",
            fontWeight: "500",
          }}
        >
          Home
        </Link>

        <Link
          to="/add-property"
          style={{
            textDecoration: "none",
            color: "#333",
            fontWeight: "500",
          }}
        >
          Add Property
        </Link>

        <Link
          to="/my-properties"
          style={{
            textDecoration: "none",
            color: "#333",
            fontWeight: "500",
          }}
        >
          My Properties
        </Link>

        <Link
          to="/my-bookings"
          style={{
            textDecoration: "none",
            color: "#333",
            fontWeight: "500",
          }}
        >
          My Bookings
        </Link>

        <Link
          to="/login"
          style={{
            textDecoration: "none",
            color: "#333",
            fontWeight: "500",
          }}
        >
          Login
        </Link>

        <Link
          to="/register"
          style={{
            textDecoration: "none",
            background: "#ff385c",
            color: "white",
            padding: "10px 18px",
            borderRadius: "25px",
            fontWeight: "600",
          }}
        >
          Register
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;