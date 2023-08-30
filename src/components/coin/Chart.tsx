import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinHistory } from "../../api";
import ApexChart from "react-apexcharts";
import moment from 'moment';

// import { useParams } from "react-router-dom";
interface ICharProps{
    coinId: string
}

interface IHistorical{
    time_open: number;
    time_close: number;
    open: string;
    high: string;
    low: string;
    close: string;
    volume: string;
    market_cap: number;
}

function Chart(){
    const {coinId} = useOutletContext<ICharProps>();
    const {isLoading, data} = useQuery<IHistorical[]>(['chlcv', []], ()=>fetchCoinHistory(coinId))
    console.log('[[data]] ',data)
    // const {coinId} = useParams() as {coinId: string};
    // console.log('[coinId ',coinId)
    return <div>

        {isLoading?'Loading Chart.. ':<ApexChart type="line" 
        options = {{
            theme: {
                mode: 'dark',
            },
            colors: ['yellow', 'gray'],
            fill: {
                type: 'gradient',
                
                gradient: {
                    gradientToColors: ['red', 'blue'],
                    stops: [0, 100],
                },
            },
            tooltip: {
                y: {
                    formatter: value=>`$ ${value.toFixed(2)}`
                },
            },
            xaxis: {
                categories: data?.map(x=> moment(x.time_open).format('YYYY/MM/DD'))
            },  
        }}
        series={[
            {
                name: 'Open',
                data: data?.map(price=>Number(price.open)) as number[]
            },
            {
                name: 'Close',
                data: data?.map(price=>Number(price.close)) as number[]
            },
        ]}
        
        width="500"
        height="500"/>}
    </div>
}
export default Chart;