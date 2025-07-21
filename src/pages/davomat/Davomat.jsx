import React from 'react'
import "./Davomat.css"

function Davomat({sidebar}) {
  return (
    <>
     <div className="davomat">
          <div className={`container ${sidebar?"active":""}`}>
             <div className="variable">
                 <h1>
                    davomat
                 </h1>
             </div>
          </div>
      </div>
    </>
  )
}

export default Davomat