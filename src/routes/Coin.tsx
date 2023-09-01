import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link, Outlet, Route, Routes, useLocation, useMatch, useParams, useSearchParams } from "react-router-dom"
import { styled } from "styled-components";
import { fetchCoinInfo, fetchCoinTickers } from "../api";
import { Helmet } from "react-helmet";

const Container = styled.div`
    width: 400px;
    padding: 16px;

`;

const CoinText = styled.div``
    

const Header = styled.header`
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props=>props.theme.textColor};
    font-size: 2rem;
`;

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;
const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;
const Description = styled.p`
  margin: 20px 0px;
`;

const Teb = styled.ul`
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.32);
  display: flex;
  align-items: center;
  padding: 8px;
  margin: 16px 0;
  >li {
    padding: 4px 16px;
    border-right: 1px solid gray;
    &:last-child{
        border-right: 0;
    }
    &.isActive{
        font-weight: bold;
        *{
            color: ${props=>props.theme.accentColor}
        }
        
    }
  }
`

interface ICoin{
    coinId: string
}
interface ILocation {
    state:{
        name:string;
    };
}

interface IInfoData{
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
    logo: string;
    description: string;
    message: string;
    open_source: boolean;
    started_at: string;
    development_status: string;
    hardware_wallet: boolean;
    proof_type: string;
    org_structure: string;
    hash_algorithm: string;
    first_data_at: string;
    last_data_at: string;
}

interface IPriceData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    beta_value: number;
    first_data_at: string;
    last_updated: string;
    quotes: {
        USD: {
            ath_date: string;
            ath_price: number;
            market_cap: number;
            market_cap_change_24h: number;
            percent_change_1h: number;
            percent_change_1y: number;
            percent_change_6h: number;
            percent_change_7d: number;
            percent_change_12h: number;
            percent_change_15m: number;
            percent_change_24h: number;
            percent_change_30d: number;
            percent_change_30m: number;
            percent_from_price_ath: number;
            price: number;
            volume_24h: number;
            volume_24h_change_24h: number;
        }
    }
};


function Coin (){
    
    
    // react-router-dom v6 이상부터 제네릭 미지원 -- const {coinId} = useParams<ICoin>();
    // const {coinId} = useParams<{coinId: string}>();
    const {coinId} = useParams() as {coinId: string}
    
    // 앞 페이지에서 데이터를 넘겨줬기 때문에 바로 진입시 에러 발생
    const {state} = useLocation() as ILocation;
    
    const priceMatch = useMatch('/:codId/price');
    const chartMatch = useMatch('/:codeId/chart');

    const {isLoading: infoLoading, data: infoData} = useQuery<IInfoData>(['info', coinId], ()=>fetchCoinInfo(coinId))
    const {isLoading: priceLoading, data: priceData} = useQuery<IPriceData>(['price', coinId], ()=>fetchCoinTickers(coinId), {
      refetchInterval: 60000, //60초마다 다시 조회
    })
    const isLoading = infoLoading &&  priceLoading;

    return <Container>
        <Helmet>
          <title>
            {state?.name || 'Loading..'}
          </title>
        </Helmet>

         <Overview>
            <OverviewItem>
              <span>Rank:</span>
              <span>{infoData?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol:</span>
              <span>${infoData?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Price:</span>
              <span>{priceData?.quotes.USD.price.toFixed(3)}</span>
            </OverviewItem>
          </Overview>
          <Description>{infoData?.description}</Description>
          <Overview>
            <OverviewItem>
              <span>Total Suply:</span>
              <span>{priceData?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply:</span>
              <span>{priceData?.max_supply}</span>
            </OverviewItem>
          </Overview>
        
        <CoinText>
            {isLoading?'...Loading':`${infoData?.name} (${priceData?.quotes.USD.ath_price})`}
        </CoinText>

        <Teb>
            <li className={priceMatch !==null ? 'isActive'  : ''}>
                <Link to={`/coin-project/${coinId}/chart`}>chart</Link></li>
            <li><Link to={`/coin-project/${coinId}/price`}>price</Link></li>
        </Teb>


        <Outlet context={{coinId}}/>
        
    </Container>
}
export default Coin