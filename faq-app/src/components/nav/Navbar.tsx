import React from "react";
import { BiMenu } from "react-icons/bi";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import "./navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="nav-container">
      <div className="left-wrapper">
        <MdOutlineQuestionAnswer className="logo-icon" />
        <h3>FAQ</h3>
      </div>
      <div className="right-wrapper">
          <BiMenu className="menu-icon" />
          <button className="fill-button">Log in</button>
          <button className="out-button">Sign up</button>
      </div>
    </nav>
  );
};

export default Navbar;
