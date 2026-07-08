import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditProperty() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/properties/${id}`
        );

        setTitle(res.data.title);
        setDescription(res.data.description);
        setPrice(res.data.price);
        setLocation(res.data.location);
        setImage(res.data.image);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProperty();
  }, [id]);

  const updateProperty = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      await axios.put(
        `http://localhost:5000/api/properties/${id}`,
        {
          title,
          description,
          price,
          location,
          image,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Property Updated Successfully");

      navigate("/my-properties");
    } catch (error) {
      console.error(error);
      alert("Update Failed");
    }
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      <h1>Edit Property</h1>

      <form onSubmit={updateProperty}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "10px",
          }}
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "10px",
            height: "100px",
          }}
        />

        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "10px",
          }}
        />

        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "10px",
          }}
        />

        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            background: "#ff385c",
            color: "white",
            border: "none",
            borderRadius: "8px",
          }}
        >
          Update Property
        </button>
      </form>
    </div>
  );
}

export default EditProperty;