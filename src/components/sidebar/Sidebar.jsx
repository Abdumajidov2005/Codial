import React from "react";
import "./Sidebar.css";
import { MdGroups, MdHome } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { GrSchedules } from "react-icons/gr";
import { RiAuctionFill } from "react-icons/ri";
import { IoNewspaperSharp } from "react-icons/io5";

function Sidebar({ sidebar, setSidebar }) {
  return (
    <>
      <div className={`sidebar ${sidebar ? "active" : ""}`}>
        <div
          onClick={() => {
            sidebar ? setSidebar(false) : setSidebar(true);
          }}
          className="dashboard"
        >
          {sidebar ? <FaChevronRight /> : <FaChevronLeft />}
        </div>
        <NavLink to={"/"} className="logo">
          <div className="logo-codial">
            <img src="/imgs/image.png" alt="" />
          </div>
          <h1>Codial</h1>
        </NavLink>
        <ul className="links">
          <NavLink to={"/"}>
            <MdHome /> <span>Bosh Sahifa</span>
          </NavLink>
          <NavLink to={"/groups"}>
            <MdGroups /> <span>Guruhlar</span>
          </NavLink>
          <NavLink to={"/schedule"}>
            <GrSchedules /> <span>Dars Jadvali</span>
          </NavLink>
          <NavLink to={"/auction"}>
            <RiAuctionFill /> <span>Auksionlar</span>
          </NavLink>
          <NavLink to={"/notice"}>
            <IoNewspaperSharp/> <span>Yangiliklar va e'lonlar</span>
          </NavLink>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
