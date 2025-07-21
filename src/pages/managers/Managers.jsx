import React from 'react'
import "./Managers.css"

function Managers({sidebar}) {
  return (
    <>
       <div className="managers">
          <div className={`container ${sidebar?"active":""}`}>
             <div className="variable">
                 <h1>
                    managers
                 </h1>
             </div>
          </div>
      </div>
    </>
  )
}

export default Managers