import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem("token", res.data.token);

      navigate("/");
      
      console.log(res.data);

    } catch (error) {
  console.error(error);

  console.log(error.response?.data);

  alert(
    error.response?.data?.message ||
    "Login Failed"
  );
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

      <h1
  style={{
    textAlign: "center",
    color: "#222",
    fontSize: "42px",
    fontWeight: "700",
  }}
>
  Login
</h1>

      <form onSubmit={loginUser}>
      
      <input
  type="email"
  placeholder="Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  style={{
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
  }}
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
    }}
  >
    {showPassword ? <FaEyeSlash /> : <FaEye />}
  </span>
</div>

<button
  type="submit"
  style={{
    width: "100%",
    padding: "12px",
    background: "#ff385c",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  }}
>
  Login
</button>

<p style={{ textAlign: "center", marginTop: "15px" }}>
  Don't have an account?{" "}
  <span
    onClick={() => navigate("/register")}
    style={{
      color: "#ff385c",
      cursor: "pointer",
      fontWeight: "bold",
    }}
  >
    Register
  </span>
</p>

      </form>

    </div>
  </div>
);
}

export default Login;