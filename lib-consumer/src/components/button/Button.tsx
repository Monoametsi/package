import React from "react";
import { Link } from "react-router-dom";
import { App as LibApp } from '@Monoametsi/app-library';

interface ButtonProps {
  link: string;
  btnText: string
}

const Button = (props: ButtonProps) => {
  return (
    <div className="pb-sect">
      <div className="pb-cont-cont">
          <div className="btn-cont">
             {/* <LibApp /> */}
             <Link to={props.link}>
                <button className="btn" id="back">{props.btnText}</button>
             </Link> 
          </div>
      </div>
  </div>
  );
};

export default Button;