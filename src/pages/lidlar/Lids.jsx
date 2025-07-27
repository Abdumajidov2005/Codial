import React, { useState } from "react";
import "./Lids.css";
import { CgArrowsExpandRight } from "react-icons/cg";
import { HiXMark } from "react-icons/hi2";
import { FaChevronDown, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

function Lids({ sidebar }) {
  const [zoomPlus, setZoomPlus] = useState(false);
  const [shorten, setShorten] = useState(false);
  const [shorten2, setShorten2] = useState(false);
  const [shorten3, setShorten3] = useState(false);

  const [addToLids, setAddToLids] = useState(false);

  const[nextPage, setNextPage] = useState(false);

  return (
    <>
      <div className={`lids-modals ${addToLids ? "placement" : ""}`}>
        <div className="lids-modals-information">
          <div className="lids-modals-information-down">
             <p>
               <span
              onClick={() => {
                setAddToLids(false);
              }}
              className="lids-modals-mark"
            >
              <FaXmark />
            </span>
            <span>Lid qo'shish</span>
             </p>
             <div className="lids-modals-btns">
                 <button className={`btn-nexts ${nextPage ? "delete-btn" :""}`} onClick={()=>{
                  setNextPage(true)
                 }}> <FaChevronLeft /> Orqaga </button>
                 <button>Bekor qilish</button>
                 <button className="btn-prev" onClick={()=>{
                   setNextPage(false)
                 }}>Keyingi <FaChevronRight /></button>
             </div>
          </div>
          <div className="lids-modals-helper">
               <p className={`helps ${nextPage ? "activate": ""}`} onClick={()=>{
                setNextPage(true)
               }}>Asosiy</p>
               <p className={`helps ${nextPage ? "": "activate2"}`} onClick={()=>{
                setNextPage(false)
               }}>Yordamchi</p>
          </div>
          <div className="lids-modals-panels">
               <div className={`lids-modals-panels-content1 ${nextPage ? "":"take-up"}`}>
                   <ul>
                      <li>
                        <label htmlFor="">Filial</label>
                        <button>Emirat</button>
                        <button>Xonaqoh</button>
                      </li>
                      <li>
                        <label htmlFor="">Murojaatchi</label>
                        <input type="text" placeholder="Izlash" />
                      </li>
                      <li>salom</li>
                      <li>salom</li>
                   </ul>

               </div>
               <div className={`lids-modals-panels-content2 ${nextPage ? "take-down":""}`}>
                lorem400
               </div>
          </div>
        </div>
      </div>

      <div className="lids">
        <div className={`container ${sidebar ? "active" : ""}`}>
          <div className="variable">
            <div className={`lids-add-content ${zoomPlus ? "zooms" : ""}`}>
              <div className="lids-title">
                <h4>Lids</h4>
                <div className="expand">
                  <button
                    onClick={() => {
                      setAddToLids(true);
                    }}
                  >
                    Qo'shish
                  </button>
                  <p
                    onClick={() => {
                      setZoomPlus((prev) => !prev);
                    }}
                    className="zoom"
                  >
                    {zoomPlus ? <HiXMark /> : <CgArrowsExpandRight />}
                  </p>
                </div>
              </div>
              <h3 className="status">Status</h3>

              <ul className="status-bar">
                <li
                  onClick={() => {
                    {
                      setShorten((prev) => !prev);
                    }
                  }}
                >
                  Barchasi
                  {shorten ? <FaChevronDown /> : <FaChevronRight />}
                </li>
                <ul className={`shortcut ${shorten ? "cutting" : ""}`}>
                  <li>
                    <p>
                      Qayta bog'lanishga <span>20</span>
                    </p>{" "}
                    <FaChevronRight />
                  </li>
                  <li>
                    <p>
                      Sinov darsga yozildi <span>20</span>
                    </p>{" "}
                    <FaChevronRight />
                  </li>
                  <li>
                    <p>
                      {" "}
                      Sinov darsga qatnashdi <span>100</span>{" "}
                    </p>{" "}
                    <FaChevronRight />
                  </li>
                  <li>
                    <p>
                      O'qishni boshladi <span>0</span>{" "}
                    </p>{" "}
                    <FaChevronRight />
                  </li>
                  <li>
                    <p>
                      Ma'qul kelmadi <span>0</span>{" "}
                    </p>{" "}
                    <FaChevronRight />
                  </li>
                  <li>
                    <p>
                      Ma'qul kelmadi(Sifatsiz) <span>0</span>{" "}
                    </p>{" "}
                    <FaChevronRight />
                  </li>
                  <li>
                    <p>
                      Keyinroq o'qiydi <span>0</span>{" "}
                    </p>{" "}
                    <FaChevronRight />
                  </li>
                </ul>
              </ul>
            </div>
            <div className="lids-statistiks">
              <div className="lids-statistik">
                <div className="lids-title">
                  <h4>Lidlar(Statistika)</h4>
                  <div className="expand">
                    <p className="zoom">
                      {/* {zoomPlus ? <HiXMark /> : <CgArrowsExpandRight />} */}
                      <CgArrowsExpandRight />
                    </p>
                  </div>
                </div>
                <h3 className="status">Yil</h3>
                <ul className="status-bar">
                  <li
                    onClick={() => {
                      {
                        setShorten2((prev) => !prev);
                      }
                    }}
                  >
                    Barchasi
                    {shorten2 ? <FaChevronDown /> : <FaChevronRight />}
                  </li>
                  <ul className={`shortcut ${shorten2 ? "cutting" : ""}`}>
                    <li>
                      <p>
                        2025 <span>20</span>
                      </p>{" "}
                      <FaChevronRight />
                    </li>
                    <li>
                      <p>
                        2024 <span>20</span>
                      </p>
                      <FaChevronRight />
                    </li>
                    <li>
                      <p>
                        2024 <span>20</span>
                      </p>
                      <FaChevronRight />
                    </li>
                    <li>
                      <p>
                        2024 <span>20</span>
                      </p>
                      <FaChevronRight />
                    </li>
                  </ul>
                </ul>
              </div>
              <div className="lids-payings">
                <div className="lids-title">
                  <h4>Lidlar(To'lov Qilganlar)</h4>
                  <div className="expand">
                    <p className="zoom">
                      {/* {zoomPlus ? <HiXMark /> : <CgArrowsExpandRight />} */}
                      <CgArrowsExpandRight />
                    </p>
                  </div>
                </div>
                <h3 className="status">Yil</h3>
                <ul className="status-bar">
                  <li
                    onClick={() => {
                      {
                        setShorten3((prev) => !prev);
                      }
                    }}
                  >
                    Barchasi
                    {shorten3 ? <FaChevronDown /> : <FaChevronRight />}
                  </li>
                  <ul className={`shortcut ${shorten3 ? "cutting" : ""}`}>
                    <li>
                      <p>
                        2025 <span>20</span>
                      </p>{" "}
                      <FaChevronRight />
                    </li>
                    <li>
                      <p>
                        2024 <span>20</span>
                      </p>
                      <FaChevronRight />
                    </li>
                    <li>
                      <p>
                        2024 <span>20</span>
                      </p>
                      <FaChevronRight />
                    </li>
                    <li>
                      <p>
                        2024 <span>20</span>
                      </p>
                      <FaChevronRight />
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Lids;
