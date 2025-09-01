import React from "react";
import "./LidsModal.css";

function LidsModal({ setCancelModal, setAddToLids }) {
  return (
    <>
      <div className="lids-helpers-modal">
        <p>
          Agar hozir chiqib ketsangiz o'zgartirishlar saqlanib qolmaydi
        </p>
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
    </>
  );
}

export default LidsModal;
