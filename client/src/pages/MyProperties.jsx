import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./MyProperties.css";

function MyProperties() {
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log("TOKEN:", token);

        const res = await axios.get(
          "http://localhost:5000/api/properties/my-properties",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("DATA:", res.data);

        setProperties(res.data);
        console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProperties();
  }, []);

  const deleteProperty = async (id) => {
  try {
    const token = localStorage.getItem("token");

    await axios.delete(
      `http://localhost:5000/api/properties/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setProperties(
      properties.filter(
        (property) => property._id !== id
      )
    );

    alert("Property Deleted");
  } catch (error) {
    console.error(error);
    alert("Delete Failed");
  }
};

  return (
  <div className="my-properties-page">
  <div className="my-properties-container">

    <button
  className="home-btn"
  onClick={() => navigate("/")}
>
  ← Home
</button>

<h1 className="my-properties-title">
  My Properties
</h1>

<p className="property-count">
  {properties.length} Properties Listed
</p>

      {properties.length === 0 ? (
        <h3>No Properties Found</h3>
      ) : (
        properties.map((property) => (
         <div
  key={property._id}
  className="property-card"
>
  <img
  src={property.image}
  alt={property.title}
  style={{
    width: "100%",
    height: "250px",
    objectFit: "cover",
    borderRadius: "15px",
    marginBottom: "15px",
  }}
/>

            <h2>{property.title}</h2>

            <p>📍 {property.location}</p>

            <p>💰 ₹{property.price}</p>

            <p>{property.description}</p>

<Link
  to={`/edit-property/${property._id}`}
>
  <button
    style={{
      background: "#ff385c",
      color: "white",
      border: "none",
      padding: "10px",
      borderRadius: "6px",
      cursor: "pointer",
      marginRight: "10px",
    }}
  >
    Edit Property
  </button>
</Link>
<button
  onClick={() => deleteProperty(property._id)}
  style={{
    background: "red",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "10px",
  }}
>
  Delete Property
</button>
          </div>
        ))
      )}
    </div>
    </div>
  );
}

export default MyProperties;