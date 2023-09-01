import { Link, useNavigate } from "react-router-dom"
import { styled } from "styled-components";
import sun from '../images/sun.png' ;
import moon from '../images/moon.png' 
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkAtom } from "../atoms";
const TopHeader = styled.header`
    
    border-bottom: 1px solid;
    display: flex;
    ul{
        flex: 1;
        height: 64px;
        display: flex;
        align-items: center;
        li{
            padding: 0 8px;
        }
    }
`;
const Toggle = styled.div`
    width: 64px;
    height: 64px;
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    &.dark{
        background-image: url(${sun});
    }
    &.light{
        background-image: url(${moon});
    }
`;


const Header = () => {
    const isDark = useRecoilValue(isDarkAtom);
    const setDarkAtom = useSetRecoilState(isDarkAtom);
    const toggleDarkAtom = ()=> setDarkAtom(prev=>!prev);
    // const navigate = useNavigate();
    // const onAboutClick = () => {
    //     navigate('/about')
    // }
    return <TopHeader>
        <ul>
            <li><Link to={'/'}>Home</Link></li>
            {/* <li><button onClick={onAboutClick}>About</button> </li> */}
            <li><Link to={'/coin-project'}>Coin Project</Link></li>
            <li><Link to={'/about'}>Todo Project</Link></li>
        </ul>
        <Toggle className={isDark?'dark':'light'} onClick={toggleDarkAtom}></Toggle>
    </TopHeader>
}
export default Header