import React from "react";
import { Onboarding } from '@ikhokha/onboard';
import Button from "../button";

const Onboard = () => {
    return (
    <div className="pb-sect">
        <div className="sect">
            <Button link={"page-1"} btnText="Page 1 tab"/> 
            <Button link={"page-2"} btnText="Page 2 tab"/> 
        </div>
        <Onboarding />
    </div>
    );
  };
  
  export default Onboard;