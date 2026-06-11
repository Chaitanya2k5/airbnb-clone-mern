import { Link } from "react-router-dom";

function PropertyCard({ property }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        width: "300px",
      }}
    >
      <img
        src={property.image}
        alt={property.title}
       