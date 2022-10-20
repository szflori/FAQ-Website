import React, { useContext } from "react";
import ViewCategoryComponent from "./ViewCategoryComponent";

import "./ListCategoryStyle.css";
import { useAppSelector } from "../../store/hooks";

const ListCategoryComponent: React.FC = () => {
  const categories = useAppSelector((state) => state.category.items);
  return (
    <ul className="tag-list">
      {categories.map((item) => (
        <ViewCategoryComponent
          key={item.id}
          id={item.id}
          title={item.title}
          bg="light"
        />
      ))}
    </ul>
  );
};

export default ListCategoryComponent;
