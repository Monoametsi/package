import React from "react";
import { Link } from "react-router-dom";

export interface ButtonProps {
  link: string;
  page: string;
  btnText: string
}

const Button = (props: ButtonProps) => {
  return (
    <div className="pb-sect">
      <div className="pb-cont-cont">
         <h1>{[props.page]}</h1>
          <div className="btn-cont">
             <Link to={props.link}>
                <button className="btn">{props.btnText}</button>
             </Link> 
          </div>
      </div>
  </div>
  );
};

export default Button;