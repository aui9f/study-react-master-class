import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { styled } from "styled-components"
import { fetchCoins } from "../api";
import { useSetRecoilState } from "recoil";
import { isDarkAtom } from "../atoms";


const Container = styled.div`
    width: 400px;
    padding: 16px;

`;
const Header = styled.header`
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const CoinsList = styled.ul`
    
`;
const Coin = styled.li`
    padding: 8px;
    border: 1px solid;
    border-radius: 4px;
    margin-bottom: 4px;
    background-color: ${props=>props.theme.accentColor};
    color: ${props=>props.theme.textColor};
    a{
        display: flex;
        align-items: center;
        img{
            margin-right: 4px;
        }
    }
`;

const Title = styled.h1`
    font-size: 2rem;
    color: ${props=>props.theme.accentColor};
`;

interface CoinInterface {
        id: string,
        name: string,
        symbol: string,
        rank: number,
        is_new: boolean,
        is_active: boolean,
        type: string,
    }



function Coins (){
    const {isLoading, data} = useQuery<CoinInterface[]>(["allCoins"], fetchCoins)
    //@tanstack/react-query에서 useQuery를 사용할때 query key의 값은 대괄호로 묶어줘야합니다
    const setDarkAtom = useSetRecoilState(isDarkAtom);
    const toggleDarkAtom = () => setDarkAtom(prev=>!prev);

    return <>
        <Container>
            <Header>
                <Title>Coin</Title>
                <button onClick={toggleDarkAtom}>Toggle Mode</button>
            </Header>
            <CoinsList>
                {
                    isLoading ? 
                    '...Loading...' :
                    data?.slice(0,10).map(coin=>
                        <Coin key={coin.id}>
                            {/* 페이지로 정보 전달하기 [state] */}
                        <Link to={`/${coin.id}`} state={{
                            name: coin.name,
                            
                        }}>
                            <img src={`https://raw.githubusercontent.com/ErikThiart/cryptocurrency-icons/master/16/${coin.name.toLowerCase().split(" ").join("-")}.png`} />
                            {coin.name} &rarr;
                        </Link>
                        </Coin>
                    )
                }
            </CoinsList>
        </Container>
    </>
}
export default Coins