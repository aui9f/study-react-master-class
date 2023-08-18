import { Link, Outlet, useSearchParams } from 'react-router-dom'
import {users} from '../db'
const Home = () => {
    const [readSearchParams, setSearchParams] = useSearchParams();
    // console.log("???")
    console.log(readSearchParams.get("geo") || '???');
  

    setTimeout(()=>{
        // setSearchParams({
        //     day: 'today',
        //     tomorrow: 'true'
        // })
    }, 3000);
    
    return <div>
        <ul>
            {users.map((x)=><li key={x.id}>
                <Link to={`/user/${x.id}`}>{x.name}</Link>
            </li>)}
        </ul>
        <Outlet/>
    </div>
}
export default Home


