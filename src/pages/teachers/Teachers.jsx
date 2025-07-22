import React from "react";
import "./Teachers.css";
import { MdRemoveRedEye } from "react-icons/md";
import { LuCirclePlus } from "react-icons/lu";

function Teachers({ sidebar }) {
  return (
    <>
      <div className="teachers">
        <div className={`container ${sidebar ? "active" : ""}`}>
           <div className="additionn">
             <button>
              <LuCirclePlus />
              Qo'shish
             </button>
           </div>
          <div className="enter-data-teaches">
            <ul className="enter-data-titles-teach">
              <li>O’qituvchi</li>
              <li>Guruxlar soni</li>
              <li>Gurupavoy guruhlar</li>
              <li>Individualni gr</li>
              <li>Bitiruv Guruhlar</li>
              <li>Yangi  guruhlar</li>
              <li>Batafsil malumot</li>
            </ul>
            <div className="variable">
              <ul className="enter-data-teach-person">
                <li>Asadbek</li>
                <li>4 ta</li>
                <li>2 ta</li>
                <li>1 ta</li>
                <li>
                 2 ta
                </li>
                <li>
                  3 ta
                </li>
                <li>
                  <MdRemoveRedEye />
                  Ko'rish
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Teachers;
