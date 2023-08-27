import React from "react";
import "./Filter.css";
import { Link } from "react-router-dom";

const Filter = () => {
  return (
    <div className="filterContainer">
      <h2 className="filterTitle">Categoría</h2>
      <div className="filterLinkContainer">
        <p className="linkFilter">
          <Link to={"/"}>All</Link>
        </p>
        <p className="linkFilter">
          <Link to={"/category/men's clothing"}>Ropa de Hombre</Link>
        </p>
        <p className="linkFilter">
          <Link to={"/category/women's clothing"}>Ropa de Mujer</Link>
        </p>
        <p className="linkFilter">
          <Link to={"/category/jewelery"}>Joyas</Link>
        </p>
        <p className="linkFilter">
          <Link to={"/category/electronics"}>Electrónica</Link>
        </p>
      </div>
    </div>
  );
};

export default Filter;
