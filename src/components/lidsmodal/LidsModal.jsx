import React from "react";
import "./LidsModal.css";

function LidsModal({ setCancelModal, setAddToLids }) {
  return (
    <>
      <div className="lids-helpers-modal">
        <div className="close-modal">
          <p>Rostan ham bekor qilasizmi. Agar hozir chiqib ketsangiz o'zgartirishlar saqlanib qolmaydi</p>
          <button
            className="over"
            onClick={() => {
              setAddToLids(false);
              setCancelModal(false);
            }}
          >
            Chiqib ketish
          </button>
        </div>
          <div className="close-modal">
            <p>O'zgartirishlar kiritishni istasangiz ortga qayting</p>
          <button
            className="over"
            onClick={() => {
              setCancelModal(false);
            }}
          >
            Orqaga qaytish
          </button>
        </div>
      </div>
    </>
  );
}

export default LidsModal;
