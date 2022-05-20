import React from "react";
import { BiMenu } from "react-icons/bi";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import "./navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="nav-container">
      <div className="right-wrapper">
        <MdOutlineQuestionAnswer />
        <h3>FAQ</h3>
      </div>
      <div className="left-wrapper">
        <BiMenu />
      </div>
    </nav>
  );
};

export default Navbar;
