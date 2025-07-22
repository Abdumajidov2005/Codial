import React from "react";
import "./Students.css";
import { GrEdit } from "react-icons/gr";
import { BsTrash3Fill } from "react-icons/bs";
import { FaInfo } from "react-icons/fa";
import { LuCirclePlus } from "react-icons/lu";
import { IoEye } from "react-icons/io5";

function Students({ sidebar }) {
  return (
    <>
      <div className="students">
        <div className={`container ${sidebar ? "active" : ""}`}>
          <div className="addition-st">
            <button>
              <LuCirclePlus /> Qo'shish
            </button>
            <p className="all-student">Barcha o’quvchilar - 1,897 ta</p>
            <div className="type-groups">
              <p>Bitiruvchi guruhlar</p>
              <p>Yangi guruhlar</p>
              <p>Gurux</p>
              <p>Individual</p>
            </div>
          </div>

          <div className="enter-data-students">
            <ul className="enter-data-titles-student">
              <li>O’quvchi</li>
              <li>Ota / Ona</li>
              <li>Gurux nomi</li>
              <li>To’laganmi</li>
              <li>Vazifalari</li>
              <li>O’zgartirish</li>
              <li>O’chirish</li>
            </ul>
            <div className="variable">
              <ul className="enter-data-student-founders">
                <li>
                  <span> Zamira Egamberdiyeva</span>
                  <span>+998 90 333 66 52</span>
                </li>
                <li>
                  <span>Azamat Sodiqov</span>
                  <span>+998 91 212 00 11</span>
                </li>
                <li>Frontend27</li>
                <li>Ha</li>
                <li>
                  <IoEye /> Ko’rish
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

export default Students;
