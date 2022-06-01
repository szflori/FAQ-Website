import React, { useState } from "react";
import { Category } from "../models/category";

import { Test_Category } from "../DUMMY_DATA";

type Props = {
  children: React.ReactNode;
};

type CategoryContextObj = {
  items: Category[];
  tag: Category;
  onFilteredTag: (id: string) => void;
};

export const CategoryContext = React.createContext<CategoryContextObj>({
  items: [],
  tag: Test_Category[0],
  onFilteredTag: () => {},
});

const CategoryContextProvider: React.FC<Props> = ({ children }) => {
  const [categories, setCategories] = useState<Category[]>(Test_Category);
  const [filteredTag, setFilteredTag] = useState<Category>(Test_Category[0]);

  const filteredTagHandler = (id: string) => {
    categories.find((item) => {
      if (item.id === id) {
        return setFilteredTag(item);
      }
    });
  };

  const contextData: CategoryContextObj = {
    items: categories,
    tag: filteredTag,
    onFilteredTag: filteredTagHandler,
  };
  return (
    <CategoryContext.Provider value={contextData}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryContextProvider;
