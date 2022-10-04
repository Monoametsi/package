import React from "react";
import { Link } from "react-router-dom";

export interface ButtonProps {
  link: string;
  btnText: string
}

const Button = (props: ButtonProps) => {
  return (
    <div className="pb-sect">
      <div className="pb-cont-cont">
          <div className="btn-cont">
             <Link to={props.link}>
                <button className="btn">{props.btnText}</button>
             </Link> 
          </div>
          <div className="btn-cont">
             <Link to="page-2">
                <button className="btn">Go to page 2</button>
             </Link> 
          </div>
      </div>
  </div>
  );
};

export default Button;