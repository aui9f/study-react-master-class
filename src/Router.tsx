import {createBrowserRouter} from'react-router-dom'

import App from './App'
import NotFound from './components/NotFound'
import Error from './components/Error'
import User from './components/User'
import Followers from './components/user/Followers'
import Coins from './routes/Coins'
import Coin from './routes/Coin'
import Chart from './components/coin/Chart'
import Price from './components/coin/Price'
import CoinProject from './routes/CoinProject'
import About from './routes/About'



const Router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <NotFound/>, //URL이 없을 경우
        
        children: [{
                path: '/coin-project',
                element: < CoinProject / > ,
            },
            {
                path: '/coin-project/:coinId',
                element: < Coin / > ,
                children: [{
                        path: '/coin-project/:coinId/chart',
                        element: < Chart / > ,
                    },
                    {
                        path: '/coin-project/:coinId/price',
                        element: < Price / > ,
                    }
                ]
            }



        ],
        
    },
   
     {
        path: '/about',
        element: <About/>
    },
])
export default Router