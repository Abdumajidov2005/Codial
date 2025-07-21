import React from 'react'
import "./Auction.css"

function Auction({sidebar}) {
  return (
    <>
     <div className="auction">
          <div className={`container ${sidebar?"active":""}`}>
             <div className="variable">
                 <h1>
                    auction
                 </h1>
             </div>
          </div>
      </div>
    </>
  )
}

export default Auction