import { Button } from "../../components";

type txt = {
    propTxt: string
}

export const Page1: React.FunctionComponent<any> = (props: txt) => {
    return (
        <Button link="page-2" btnText="Go to Page 2" page={props.propTxt}/>
    );
}