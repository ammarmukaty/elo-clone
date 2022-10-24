import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = ({ pageName, cat }) => {
  return (
    <div className="font-bold text-2xl pt-1 uppercase pl-5">
      {cat}
      {"  "}
      {pageName}
    </div>
  );
};

export default Products;
