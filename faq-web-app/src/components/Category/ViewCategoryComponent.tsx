import React, { useContext } from "react";
import { CategoryContext } from "../../store/category-context";

import "./ViewCategoryStyle.css";

const ViewCategoryComponent: React.FC<{
  id: string;
  title: string;
  bg: string;
}> = (props) => {
  const categoryCtx = useContext(CategoryContext);

  const categoryFilterHandler = (id: string) => {
    categoryCtx.onFilteredTag(id);
  };
  return (
    <li
      className={`tag-item ${props.bg}`}
      onClick={categoryFilterHandler.bind(null, props.id)}
    >
      <span>#{props.title}</span>
    </li>
  );
};

export default ViewCategoryComponent;
