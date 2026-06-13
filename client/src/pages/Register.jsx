import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const registerUser = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/register",
        {
          name,
          email,
          password,
        }
      );

      console.log(res.data);
navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Registration Failed");
    }
  };

 return (
  <div className="login-page">
    <div className="login-card">
      <button
  className="home-btn"
  onClick={() => navigate("/")}
>
  ← Home
</button>
      <h1 style={{ textAlign: "center" }}>Register</h1>
      <form onSubmit={registerUser}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

       <div
  className="password-container"
  style={{ position: "relative", marginBottom: "10px" }}
>
  <input
    type={showPassword ? "text" : "password"}
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    style={{
      width: "100%",
      padding: "10px",
    }}
  />

  <span
    onClick={() => setShowPassword(!showPassword)}
    style={{
      position: "absolute",
      right: "15px",
      top: "50%",
      transform: "translateY(-50%)",
      cursor: "pointer",
      fontSize: "18px",
    }}
  >
    {showPassword ? <FaEyeSlash /> : <FaEye />}
  </span>
</div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            background: "#ff385c",
            color: "white",
            border: "none",
          }}
        >
          Register
        </button>
           </form>

      <p style={{ textAlign: "center", marginTop: "15px" }}>
        Already have an account?{" "}
        <span
          onClick={() => navigate("/login")}
          style={{
            color: "#ff385c",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Login
        </span>
      </p>

    </div>
  </div>
);
}

export default Register;