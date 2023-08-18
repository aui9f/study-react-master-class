import { Link, Outlet, useSearchParams } from 'react-router-dom'

const Home = () => {
    // const [readSearchParams, setSearchParams] = useSearchParams();
    // // console.log("???")
    // console.log(readSearchParams.get("geo") || '???');
  

    // setTimeout(()=>{
    // }, 3000);
    
    return <div>
        [Home]
        <Outlet/>
    </div>
}
export default Home


