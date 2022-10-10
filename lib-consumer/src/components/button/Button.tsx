import React from "react";
import { Link } from "react-router-dom"
interface ButtonProps {
  link: string;
  btnText: string
}

const Button = (props: ButtonProps) => {
  return (
    <div className="pb-sect">
      <div className="pb-cont-cont">
          <div className="btn-cont">
             <Link to={props.link}>
                <button className="btn" id="back">{props.btnText}</button>
             </Link> 
          </div>
      </div>
  </div>
  );
};

export default Button;