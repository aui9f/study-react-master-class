import { useOutletContext } from "react-router-dom";

interface IFollowers {
    nameOfMyUser: string;
    testNumber: number;
}
function Followers(){
    const {nameOfMyUser} = useOutletContext<IFollowers>();
    return <>
        <p>Followers -- {nameOfMyUser}</p>
    </>
}
export default Followers;

