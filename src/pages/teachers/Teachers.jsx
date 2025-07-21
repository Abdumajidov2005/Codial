import React from 'react'
import "./Teachers.css"

function Teachers({sidebar}) {
  return (
    <>
     <div className="teachers">
          <div className={`container ${sidebar?"active":""}`}>
             <div className="variable">
                 <h1>
                    teachers
                 </h1>
             </div>
          </div>
      </div>
    </>
  )
}

export default Teachers