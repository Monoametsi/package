import React from "react";
import { Onboarding } from '@ikhokha/onboard';
import Button from "../button";

const Onboard = () => {
    return (
    <div className="pb-sect">
        <div className="sect">
            <Button link={"/page-3"} btnText="Consumer side"/> 
        </div>
        <Onboarding />
    </div>
    );
};

  export default Onboard;