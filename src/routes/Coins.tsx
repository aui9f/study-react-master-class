import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components"


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
    background-color: gray;
    color: ${props=>props.theme.textColor};
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
    const [coins, setCoins] = useState<CoinInterface[]>([]);
    const [isLoading, setIsLoding] = useState<boolean>(true);
    useEffect(()=>{
        (async()=>{
            const response = await fetch('https://api.coinpaprika.com/v1/coins');
            const json = await response.json();
            setCoins(json.slice(0,100));
            setIsLoding(false);
        })()
        
    }, [])
    return <>
        <Container>
            <Header>
                <Title>Coin</Title>
            </Header>
            <CoinsList>
                {
                    isLoading ? '...Loading...':
                    coins.map(coin=><Coin key={coin.id}>
                        <Link to={`/${coin.id}`}>{coin.name} &rarr;</Link>
                    </Coin>)
                }
            </CoinsList>
        </Container>
    </>
}
export default Coins