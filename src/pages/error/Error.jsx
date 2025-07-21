import React from 'react';
import './Error.css';

const Error = ({sidebar}) => {
  return (
  <>
     <div className="error">
        <div className={`container ${sidebar ? "actives" : ""}`}>
          <div className="variable">
            <h1>
              <span>4</span>
              <span>0</span>
              <span>4</span>
            </h1>
            <p>
              Sahifa topilmadi iltimos qaytadan urinib ko'ring
            </p>
          </div>
        </div>
      </div>
  </>
  );
};

export default Error;
