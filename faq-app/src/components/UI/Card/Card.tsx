import React from "react";
import "./card.css";
type Props = {
  children: React.ReactNode;
};

const Card: React.FC<Props> = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default Card;
