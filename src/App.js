import "./App.css";
import { Header, Navbar, Products, Footer } from "./components";
import { ContactUs, ReturnAndExchange, Dashboard, Login, Cart } from "./Pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { categories } from "./data/dummy";
import React from "react";
import { useState } from "react";

function App() {
  const subTitle = [];
  const subSubTitle = [];

  categories.forEach((item) => {
    item.sub_tittle?.forEach((subItem) => {
      subTitle.push({ subItem });
    });
  });

  subTitle.forEach((item) => {
    item.subItem.sub_sub_tittle?.forEach((subitem) => {
      subSubTitle.push(subitem);
    });
  });
  return (
    <div className="">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {categories.map((item, index) => (
            <Route
              key={index}
              path={item.link}
              element={<Products pageName={item.title} />}
            ></Route>
          ))}

          {subTitle.map((item, index2) => (
            <Route
              key={index2}
              path={item.subItem.link}
              element={<Products pageName={item.subItem.name} />}
            ></Route>
          ))}

          {subSubTitle.map((item, index2) => (
            <Route
              key={index2}
              path={item.link}
              element={<Products pageName={item.name} cat={item.category} />}
            ></Route>
          ))}

          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/ReturnAndExchange" element={<ReturnAndExchange />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
