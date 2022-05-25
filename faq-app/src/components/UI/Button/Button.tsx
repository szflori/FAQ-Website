import React from "react";
import "./button.css";

type Props = {
  type: string;
  onAction: (event: React.FormEvent) => void;
  children: React.ReactNode;
};

const Button: React.FC<Props> = ({ children, type, onAction }) => {
  return <button className={`button ${type}`} onClick={onAction}>{children}</button>;
};

export default Button;
