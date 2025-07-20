import React from "react";
import "./Sidebar.css";
import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <nav>
        <div className="logo">
          <div className="logo-codial">
            <img src="/imgs/image.png" alt="" />
          </div>
          <h1>Codial</h1>
        </div>
        <ul className="links">
          <Link to={"/"}><MdHome /> Home</Link>
          <Link to={"/groups"}>fsdf</Link>
          <li>fsdf</li>
          <li>fsdf</li>
          <li>fsdf</li>
          <li>fsdf</li>
          <li>fsdf</li>
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
