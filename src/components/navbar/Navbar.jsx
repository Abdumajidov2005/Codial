import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import { RiSearchLine } from "react-icons/ri";
import { BiBell } from "react-icons/bi";
import { Link } from "react-router-dom";
import { LuLogOut } from "react-icons/lu";
import { HiXMark } from "react-icons/hi2";

function Navbar({ sidebar, adminPanel, setAdminPanel, setLoginWatch }) {
  const panelRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // agar na panel, na button bosilmasa -> yopiladi
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setAdminPanel(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setAdminPanel]);

  return (
    <>
      <div
        ref={panelRef}
        className={`panel-account ${adminPanel ? "accounter" : ""}`}
      >
        <div className="profil-title">
          <h1>Profil </h1>
          <button onClick={()=>{
            setAdminPanel(false)
          }}>
            <HiXMark />
          </button>
        </div>
        <div className="panel-account-user">
          <div className="users-pictures">
            <img src="imgs/image.png" alt="" />
          </div>
          <h3>
            <span>O'tkirbek Abdumajidov</span>
            <span>Manager</span>
          </h3>
        </div>
        <div
          onClick={() => {
            setLoginWatch(false);
            setAdminPanel(false);
          }}
          className="panel-account-user"
        >
          <LuLogOut />
          <h3>Profildan chiqish</h3>
        </div>
      </div>

      <div className="navbar">
        <div className={`container ${sidebar ? "active" : ""}`}>
          <div className="searchs">
            <label htmlFor="search">
              <RiSearchLine />
            </label>
            <input id="search" type="text" placeholder="Qidiruv..." />
            <select>
              <option value="">Guruhlar</option>
              <option value="">O'qituvchilar</option>
              <option value="">O'quvchilar</option>
            </select>
          </div>
          <div className="users">
            <Link to={"/notice"} className="bell">
              <BiBell />
            </Link>
            <div
              ref={buttonRef}
              onClick={() => setAdminPanel(!adminPanel)}
              className="user-admin"
            >
              <div className="admin-img">
                <img src="/imgs/image.png" alt="" />
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
