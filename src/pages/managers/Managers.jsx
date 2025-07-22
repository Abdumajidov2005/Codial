import React from "react";
import "./Managers.css";
import { GrEdit } from "react-icons/gr";
import { BsTrash3Fill } from "react-icons/bs";
import { LuCirclePlus } from "react-icons/lu";

function Managers({ sidebar }) {
  return (
    <>
      <div className="managers">
        <div className={`container ${sidebar ? "active" : ""}`}>
          <div className="additionn">
            <button>
              <LuCirclePlus />
              Qo'shish
            </button>
          </div>
          <div className="enter-data-managers">
            <ul className="enter-data-titles-managers">
              <li>Menenjer</li>
              <li>Login</li>
              <li>Parol</li>
              <li>O’zgartirish</li>
              <li>O’chirish</li>
            </ul>
            <div className="variable">
              <ul className="enter-data-managers-found">
                <li>O'tkirbek</li>
                <li>O'tkirbek</li>
                <li>otkirbek1234</li>
                <li>
                  <p>
                    <GrEdit />
                  </p>
                </li>
                <li>
                  <p>
                    <BsTrash3Fill />
                  </p>
                </li>
              </ul>
              <ul className="enter-data-managers-found">
                <li>O'tkirbek</li>
                <li>O'tkirbek</li>
                <li>otkirbek1234</li>
                <li>
                  <p>
                    <GrEdit />
                  </p>
                </li>
                <li>
                  <p>
                    <BsTrash3Fill />
                  </p>
                </li>
              </ul>
              <ul className="enter-data-managers-found">
                <li>O'tkirbek</li>
                <li>O'tkirbek</li>
                <li>otkirbek1234</li>
                <li>
                  <p>
                    <GrEdit />
                  </p>
                </li>
                <li>
                  <p>
                    <BsTrash3Fill />
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Managers;
