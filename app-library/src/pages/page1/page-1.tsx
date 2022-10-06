import { Button } from "../../components";

export const Page1: React.FunctionComponent<any> = (props) => {

    const eventListener = (e: any) => {
        props.clicked('key', e);
    }

    return (
        <Button link="page-2" btnText="Go to Page 2" page={"Page 1"} clicked={eventListener}/>
    );
}