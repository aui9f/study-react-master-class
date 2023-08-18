import { useParams } from "react-router-dom"


function Coin (){
    const {coinId} = useParams<{coinId: string}>();
    return <>Coin: {coinId}</>
}
export default Coin