import React, { useState } from "react";
import "./Groups.css";
import { LuCirclePlus } from "react-icons/lu";

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
          <input type="text" placeholder="name" />
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
            <div className="personal-circut">
              <ul className="enter-data-personal">
                <li>Frontend</li>
                <li>Asadbek</li>
                <li>Gurux</li>
                <li>3</li>
                <li>Batafsil</li>
                <li>O'zgartirish</li>
                <li>O'chirish</li>
              </ul>
               <ul className="enter-data-personal">
                <li>Frontend</li>
                <li>Asadbek</li>
                <li>Gurux</li>
                <li>3</li>
                <li>Batafsil</li>
                <li>O'zgartirish</li>
                <li>O'chirish</li>
              </ul>
               <ul className="enter-data-personal">
                <li>Frontend</li>
                <li>Asadbek</li>
                <li>Gurux</li>
                <li>3</li>
                <li>Batafsil</li>
                <li>O'zgartirish</li>
                <li>O'chirish</li>
              </ul>
               <ul className="enter-data-personal">
                <li>Frontend</li>
                <li>Asadbek</li>
                <li>Gurux</li>
                <li>3</li>
                <li>Batafsil</li>
                <li>O'zgartirish</li>
                <li>O'chirish</li>
              </ul>
               <ul className="enter-data-personal">
                <li>Frontend</li>
                <li>Asadbek</li>
                <li>Gurux</li>
                <li>3</li>
                <li>Batafsil</li>
                <li>O'zgartirish</li>
                <li>O'chirish</li>
              </ul>
               <ul className="enter-data-personal">
                <li>Frontend</li>
                <li>Asadbek</li>
                <li>Gurux</li>
                <li>3</li>
                <li>Batafsil</li>
                <li>O'zgartirish</li>
                <li>O'chirish</li>
              </ul>
               <ul className="enter-data-personal">
                <li>Frontend</li>
                <li>Asadbek</li>
                <li>Gurux</li>
                <li>3</li>
                <li>Batafsil</li>
                <li>O'zgartirish</li>
                <li>O'chirish</li>
              </ul>
               <ul className="enter-data-personal">
                <li>Frontend</li>
                <li>Asadbek</li>
                <li>Gurux</li>
                <li>3</li>
                <li>Batafsil</li>
                <li>O'zgartirish</li>
                <li>O'chirish</li>
              </ul>
               <ul className="enter-data-personal">
                <li>Frontend</li>
                <li>Asadbek</li>
                <li>Gurux</li>
                <li>3</li>
                <li>Batafsil</li>
                <li>O'zgartirish</li>
                <li>O'chirish</li>
              </ul>
              <ul className="enter-data-personal">
                <li>Frontend</li>
                <li>Asadbek</li>
                <li>Gurux</li>
                <li>3</li>
                <li>Batafsil</li>
                <li>O'zgartirish</li>
                <li>O'chirish</li>
              </ul>
               <ul className="enter-data-personal">
                <li>Frontend</li>
                <li>Asadbek</li>
                <li>Gurux</li>
                <li>3</li>
                <li>Batafsil</li>
                <li>O'zgartirish</li>
                <li>O'chirish</li>
              </ul>
               <ul className="enter-data-personal">
                <li>Frontend</li>
                <li>Asadbek</li>
                <li>Gurux</li>
                <li>3</li>
                <li>Batafsil</li>
                <li>O'zgartirish</li>
                <li>O'chirish</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Groups;
