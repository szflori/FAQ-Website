import React, { useContext } from "react";
import ViewCategoryComponent from "./ViewCategoryComponent";
import { CategoryContext } from "../../store/category-context";

import "./ListCategoryStyle.css";

const ListCategoryComponent: React.FC = () => {
  const categoryCtx = useContext(CategoryContext);
  return (
    <ul className="tag-list">
      {categoryCtx.items.map((item) => (
        <ViewCategoryComponent key={item.id} id={item.id} title={item.title} bg="light"/>
      ))}
    </ul>
  );
};

export default ListCategoryComponent;
