// HomeContainer.jsx
import React from "react";
import { useParams } from "react-router-dom";
import Filter from "../Filter/Filter";
import ItemsListContainer from "../ItemsListContainer/ItemsListContainer";

const HomeContainer = () => {
  const { categoryId } = useParams();

  return (
    <>
      <Filter />
      <ItemsListContainer categoryId={categoryId} />
    </>
  );
};

export default HomeContainer;
