import React from "react";
import "./Sidebar.css";
import { MdGroups, MdHome, MdManageAccounts } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { GrSchedules } from "react-icons/gr";
import { RiAuctionFill } from "react-icons/ri";
import { IoNewspaperSharp } from "react-icons/io5";
import { GiTeacher } from "react-icons/gi";
import { PiStudent } from "react-icons/pi";
import { LuNotebookPen } from "react-icons/lu";

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
          <h1>Codi<span>a</span>l</h1>
        </NavLink>
        <ul className="links">
          <NavLink to={"/"}>
            <MdHome /> <span>Bosh Sahifa</span>
          </NavLink>
          <NavLink to={"/managers"}>
            <MdManageAccounts /> <span>Menejerlar</span>
          </NavLink>
          <NavLink to={"/groups"}>
            <MdGroups /> <span>Guruhlar</span>
          </NavLink>
          <NavLink to={"/teachers"}>
            <GiTeacher /> <span>O'qituvchilar</span>
          </NavLink>
          <NavLink to={"/students"}>
            <PiStudent /> <span>O'quvchilar</span>
          </NavLink>
          <NavLink to={"/davomat"}>
           <LuNotebookPen />  <span>Davomat</span>
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
