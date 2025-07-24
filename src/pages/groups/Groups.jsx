import React, { useState } from "react";
import "./Groups.css";
import { LuCirclePlus } from "react-icons/lu";
import { FaInfo } from "react-icons/fa";
import { GrEdit } from "react-icons/gr";
import { BsTrash3Fill } from "react-icons/bs";

function Groups({ sidebar }) {
  const [groupsModal, setGroupsModal] = useState(false);

  return (
    <>
      <div className={`group-modal ${groupsModal ? "adds" : ""}`}>
        <form
          className="modal-submit"
          onSubmit={(e) => {
            e.preventDefault();
          }}
          action=""
        >
          <h2>Gurux qo'shish</h2>
          <input type="text" placeholder="Gurux nomi :" />
          <select name="" id="">
            <option value="">
              O’qituvchini belgilang
            </option>
            <option value="">Asadbek</option>
            <option value="">Asadbek</option>
          </select>
          <select name="" id="">
            <option value="">Tarifini belgilang</option>
            <option value="">Gurux</option>
            <option value="">Individual</option>
          </select>
          <button
            type="button"
            onClick={() => {
              setGroupsModal(false);
            }}
          >
            Bekor Qilish
          </button>
          <button type="submit">Qo'shish</button>
        </form>
      </div>

      <div className="groups">
        <div className={`container ${sidebar ? "actives" : ""}`}>
          <div className="addition">
            <button
              onClick={() => {
                setGroupsModal(true);
              }}
            >
              <LuCirclePlus /> Qo'shish
            </button>
            <select name="" id="">
              <option value="">Barcha o'qituvchilar</option>
              <option value="">O'tkirbek</option>
              <option value="">O'tkirbek</option>
              <option value="">O'tkirbek</option>
            </select>
            <div className="type-groups">
              <p>Bitiruvchi guruhlar</p>
              <p>Yangi guruhlar</p>
              <p>Gurux</p>
              <p>Individual</p>
            </div>
          </div>

          <div className="enter-data">
            <ul className="enter-data-titles">
              <li>Gurux nomi</li>
              <li>Masul o'qituvchi</li>
              <li>Tarifi</li>
              <li>O'quvchilar soni</li>
              <li>Batafsil</li>
              <li>O'zgartirish</li>
              <li>O'chirish</li>
            </ul>
            <div className="variable">
              <ul className="enter-data-personal">
                <li>Frontend</li>
                <li>Asadbek</li>
                <li>Gurux</li>
                <li>3</li>
                <li>
                  <p>
                    <FaInfo />
                  </p>
                </li>
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
              <ul className="enter-data-personal">
                <li>Frontend</li>
                <li>Asadbek</li>
                <li>Gurux</li>
                <li>3</li>
                <li>
                  <p>
                    <FaInfo />
                  </p>
                </li>
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

export default Groups;
