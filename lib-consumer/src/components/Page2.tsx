import Button from "./button";
import { App as LibApp } from '@Monoametsi/app-library';

const Page2 = (props: any) => {
  return (
    <div className="pb-sect">
      <div className="pb-cont-cont">
          <p>Page 2</p>
          <Button link="/page3" btnText="next"></Button>
          <LibApp></LibApp>
      </div>
  </div>
  );
};

export default Page2;