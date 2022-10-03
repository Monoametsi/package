import React from "react";
import Button from "./button";

const Page1 = (props: any) => {
  return (
    <div className="pb-sect">
      <div className="pb-cont-cont">
          <p>Page 1</p>
          <Button link="/page2" btnText="next"></Button>
      </div>
  </div>
  );
};

export default Page1;