import React from "react";
import "./textfield.css";

const TextField: React.FC<{
  onLabel: string;
  onType: string;
  onInputText: string;
  onRef: React.RefObject<HTMLInputElement>;
}> = (props) => {
  return (
    <div className="textfield-wrapper">
      <label>{props.onLabel}</label>
      <div className="textfield-input">
        <input
          type={props.onType}
          placeholder={props.onInputText}
          ref={props.onRef}
          className="text-input"
        />
      </div>
    </div>
  );
};

export default TextField;
