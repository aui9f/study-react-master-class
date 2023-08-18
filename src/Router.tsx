import {createBrowserRouter} from'react-router-dom'

import App from './App'
import Home from './routes/Home'
import About from './routes/About'
import NotFound from './components/NotFound'
import Error from './components/Error'
import User from './components/User'
import Followers from './components/user/Followers'

const Router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <NotFound/>, //URL이 없을 경우
        
        children: [
            {
                path: '',
                element: <Home/>,
                errorElement: <Error/>, //컴포넌트충동
                children: [
                    {
                        path: '/user/:userId',
                        element: <User/>,
                        children:  [
                            {
                                path: 'followers',
                                element: <Followers/>
                            }
                        ]
                    }
                    //path: '/user/:userId',
                    //children와 다른점
                ]
            },
            {
                path: 'about', // '/about'은 일종의 '/'의 자식
                element: <About/>
            }
        ],
        
    }
])
export default Router