import React from 'react'
import "./Spinner.css"

function Spinner() {
  return (
    <div className="dot-spinner">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="dot" style={{ "--i": i }}></div>
        ))}
      </div>
  )
}

export default Spinner