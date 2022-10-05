import React from "react";
import { App as LibApp } from '@Monoametsi/app-library';
import Button from "../button";

const Onboard = () => {
    return (
    <div className="pb-sect">
        <div className="sect">
            <Button link={"page-1"} btnText="Page 1 tab"/> 
            <Button link={"page-2"} btnText="Page 2 tab"/> 
        </div>
        <LibApp txt="Page 134567890"/>
    </div>
    );
  };
  
  export default Onboard;