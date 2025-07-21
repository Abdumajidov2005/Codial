import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Home from "../Home/Home";
import Error from "../error/Error";
import Groups from "../groups/Groups";
import Navbar from "../../components/navbar/Navbar";
import Schedule from "../schedule/Schedule";
import Auction from "../auction/Auction";
import Notice from "../notices/Notice";
import Managers from "../managers/Managers";
import Teachers from "../teachers/Teachers";
import Students from "../students/Students";
import Davomat from "../davomat/Davomat";

function RouterDom() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Navbar sidebar={sidebar} />
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
        <Routes>
          <Route path="/" element={<Home sidebar={sidebar} />} />
          <Route path="/managers" element={<Managers sidebar={sidebar}/>}/>
          <Route path="/groups" element={<Groups sidebar={sidebar} />} />
          <Route path="/teachers" element={<Teachers sidebar={sidebar}/>}/>
          <Route path="/students" element={<Students sidebar={sidebar}/>}/>
          <Route path="/schedule" element={<Schedule sidebar={sidebar} />} />
          <Route path="/davomat" element={<Davomat sidebar={sidebar}/>}/>
          <Route path="/auction" element={<Auction sidebar={sidebar} />} />
          <Route path="/notice" element={<Notice sidebar={sidebar}/>}/>
          <Route path="*" element={<Error sidebar={sidebar}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RouterDom;
