import { useEffect, useState } from "react";
import axios from "axios";
import API from "../api";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PropertyCard from "../components/PropertyCard";
import "./Home.css";

function Home() {
  const [properties, setProperties] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await axios.get(
  `${API}/api/properties`
);

        setProperties(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProperties();
  }, []);

  const filteredProperties = properties.filter((property) =>
    property.location
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <div
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "rgba(0,0,0,0.45)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
          }}
        >
          <h1
  style={{
    fontSize: "3.2rem",
    fontWeight: "700",
    marginBottom: "15px",
  }}
>
  Find your next stay
</h1>

<p
  style={{
    fontSize: "1.3rem",
    marginBottom: "30px",
  }}
>
  Search low prices on homes, apartments and villas worldwide.
</p>

          <p
            style={{
              fontSize: "1.3rem",
              marginBottom: "30px",
            }}
          >
            Discover luxury villas, beach houses and unforgettable stays.
          </p>

          <div className="search-box">
  <input
    type="text"
    placeholder="Search by location..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    style={{
      width: "100%",
      border: "none",
      outline: "none",
      fontSize: "18px",
      background: "transparent",
      color: "#222",
    }}
  />
</div>
        </div>
      </div>

      {/* FEATURED SECTION */}
      <div
        style={{
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        <h2 className="section-title">
  Featured Properties
</h2>

        <p
          style={{
            color: "#888",
          }}
        >
          Handpicked stays for your next vacation
        </p>
      </div>

      {/* PROPERTY GRID */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
          padding: "40px",
        }}
      >
        {filteredProperties.length === 0 ? (
          <h2>No Properties Found</h2>
        ) : (
          filteredProperties.map((property) => (
            <PropertyCard
              key={property._id}
              property={property}
            />
          ))
        )}
      </div>

      <Footer />
    </>
  );
}

export default Home;
