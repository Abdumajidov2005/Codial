import React from 'react'
import "./Notice.css"

function Notice({sidebar}) {
  return (
    <>
      <div className="notice">
          <div className={`container ${sidebar?"active":""}`}>
             <div className="variable">
                 <h1>
                    notice
                 </h1>
             </div>
          </div>
      </div>
    </>
  )
}

export default Notice