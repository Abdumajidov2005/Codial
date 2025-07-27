import React from "react";
import "./Navbar.css";
import { RiSearchLine } from "react-icons/ri";
import { BiBell } from "react-icons/bi";
import { Link } from "react-router-dom";

function Navbar({ sidebar }) {
  return (
    <>
      <div className="navbar">
        <div className={`container ${sidebar ? "active" : ""}`}>
          <div className="searchs">
            <label htmlFor="search">
              <RiSearchLine />
            </label>
            <input id="search" type="text" placeholder="Qidiruv..." />
            <select name="" id="">
              <option value="">Guruhlar</option>
              <option value="">O'qituvchilar</option>
              <option value="">O'quvchilar</option>
            </select>
          </div>
          <div className="users">
            <Link to={"/notice"} className="bell">
              <BiBell />
            </Link>
            <div className="user-admin">
                <div className="admin-img">
                  <img src="/imgs/adin.avif" alt="" />
                </div>
                <p>
                  <span>Abdumajidov O'tkirbek</span>
                  <span>manager</span>
                </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
