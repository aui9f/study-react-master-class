import {createBrowserRouter} from'react-router-dom'

import App from './App'
import Home from './routes/Home'
import About from './routes/About'
import NotFound from './components/NotFound'
import Error from './components/Error'
import User from './components/User'
import Followers from './components/user/Followers'
import Coins from './routes/Coins'
import Coin from './routes/Coin'

const Router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <NotFound/>, //URL이 없을 경우
        
        children: [
            {
                path: '',
                element: <Coins/>,
                errorElement: <Error/>, //컴포넌트충동
            },
            {
                path: '/:coinId',
                element: <Coin/>
            }
        ],
        
    }
])
export default Router