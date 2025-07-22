import React from "react";
import "./Home.css";

function Home({ sidebar }) {
  return (
    <>
      <div className="home-page">
        <div className={`container ${sidebar ? "active" : ""}`}>
          <div className="variable">
            <h1>Home</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
