import React from 'react'
import "./Students.css"

function Students({sidebar}) {
  return (
    <>
     <div className="students">
          <div className={`container ${sidebar?"active":""}`}>
             <div className="variable">
                 <h1>
                    student
                 </h1>
             </div>
          </div>
      </div>
    </>
  )
}

export default Students