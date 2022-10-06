import React from "react";
import { App as LibApp } from '@Monoametsi/app-library';
import Button from "../button";

const Onboard = () => {
    const test = (event:any) =>{
        console.log(event)
    }

    return (
    <div className="pb-sect">
        <div className="sect">
            <Button link={"page-1"} btnText="Page 1 tab"/> 
            <Button link={"page-2"} btnText="Page 2 tab"/> 
        </div>
        <LibApp clicked={test}/>
    </div>
    );
  };
  
  export default Onboard;