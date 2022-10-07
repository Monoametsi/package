import { Button } from "../../components";

export const Page1: React.FunctionComponent<any> = () => {

    return (
        <Button link="page-2" btnText="Go to Page 2" page={"Page 1"}/>
    );
}