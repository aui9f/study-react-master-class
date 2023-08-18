import { Outlet,Link, useParams } from "react-router-dom"
import {users} from '../db'
function User (){
    const {userId} = useParams();
    
    return <>
        <h4>User: ID[{userId}], Name[{users[Number(userId)-1].name}]</h4>
        <hr />
        <Link to="followers">See Followers</Link>
        {/* /followers '/'를 붙이지 않으면, 바로 다음 해당되는 차일드 컴포넌트로 이동 */}
        <Outlet context={{
            nameOfMyUser: users[Number(userId)-1].name,
            testNumber: 100
        }}/>
    </>
}
export default User