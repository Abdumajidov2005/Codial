import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Home from "../Home/Home";
import Error from "../error/Error";
import Groups from "../groups/Groups";
import Navbar from "../../components/navbar/Navbar";

function RouterDom() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Sidebar />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/groups" element={<Groups/>}/>
            <Route path="*" element={<Error />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RouterDom;
