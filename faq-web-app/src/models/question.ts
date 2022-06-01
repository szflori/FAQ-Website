import { Category } from "./category";

export type Question = {
  id: string;
  userID: string;
  tag: string[];
  title: string;
  description: string;
};
