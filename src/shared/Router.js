import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/main";
import Detail from "../pages/detail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
