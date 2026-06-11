import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 30px",
        background: "#ff385c",
        color: "white",
      }}
    >
      <h2>Airbnb Clone</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={{ color: "white" }}>
          Home
        </Link>

        <Link to="/login" style={{ color: "white" }}>
          Login
        </Link>

        <Link to="/register" style={{ color: "white" }}>
          Register
        </Link>

        <Link to="/my-bookings" style={{ color: "white" }}>
          My Bookings
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;