import React from 'react'
import "./Schedule.css"

function Schedule({sidebar}) {
  return (
    <>
      <div className="schedule">
          <div className={`container ${sidebar?"active":""}`}>
             <div className="variable">
                 <h1>
                    schedule
                 </h1>
             </div>
          </div>
      </div>
    </>
  )
}

export default Schedule