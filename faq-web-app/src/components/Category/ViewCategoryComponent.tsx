import React, { useContext } from "react";
import { useAppDispatch } from "../../store/hooks";
import { filteredTag } from "../../store/reducers/category-slice";

import "./ViewCategoryStyle.css";

const ViewCategoryComponent: React.FC<{
  id: string;
  title: string;
  bg: string;
}> = (props) => {
  const dispatch = useAppDispatch();

  const categoryFilterHandler = (id: string) => {
    dispatch(filteredTag(id));
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
