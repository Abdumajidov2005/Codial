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
          <button type="submit">
            Qo'shish
          </button>
        </form>
      </div>

      <div className="groups">
        <div className={`container ${sidebar ? "actives" : ""}`}>
          <div className="variable">
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
                <p>Bitiruvchilar</p>
                <p>Yangi</p>
                <p>Gurux</p>
                <p>Individual</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Groups;
