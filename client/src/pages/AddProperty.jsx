import { useState } from "react";
import axios from "axios";
import API from "../api";
import { useNavigate } from "react-router-dom";
import "./AddProperty.css";

function AddProperty() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const addProperty = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const propertyData = {
        title,
        description,
        price,
        location,
        image,
      };

      const res = await axios.post(
        `${API}/api/properties`,
        propertyData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Property Added Successfully");
      console.log(res.data);

      setTitle("");
      setDescription("");
      setPrice("");
      setLocation("");
      setImage("");
    } catch (error) {
      console.error(error);
      alert("Failed to Add Property");
    }
  };

  return (
    <div className="add-property-page">
    <div className="add-property-card">
    
  <button
    className="home-btn"
    onClick={() => navigate("/")}
     >
    ← Home
  </button>

  <h1>Add Property</h1>

  <p
  style={{
    textAlign: "center",
    color: "#666",
    marginBottom: "25px",
  }}
>
  Add your property details below.
</p>

  <form onSubmit={addProperty}>
        <input
          type="text"
          placeholder="Property Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}

        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button
          type="submit"
        >
          Add Property
        </button>
      </form>
        </div>
  </div>
  );
}

export default AddProperty;
