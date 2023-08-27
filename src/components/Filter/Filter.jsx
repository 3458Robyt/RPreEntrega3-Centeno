import React from "react";
import "./Filter.css";
import { Link } from "react-router-dom";

const Filter = () => {
  return (
    <div className="filterContainer">
      <h2 className="filterTitle">Categoría</h2>
      <div className="filterLinkContainer">
        <p className="linkFilter">
          <Link to={"/"}>Todas</Link>
        </p>
        <p className="linkFilter">
          <Link to={"/Men's clothing"}>Ropa de Hombre</Link>
        </p>
        <p className="linkFilter">
          <Link to={"/Women's clothing"}>Ropa de Mujer</Link>
        </p>
        <p className="linkFilter">
          <Link to={"/Jewelery"}>Joyas</Link>
        </p>
        <p className="linkFilter">
          <Link to={"/Electronics"}>Electrónica</Link>
        </p>
      </div>
    </div>
  );
};

export default Filter;
