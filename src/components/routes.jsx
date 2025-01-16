import App from '../App'
import Shop from './Shop'
import Home from './Home'

const routes=[
    {
        path:'/',
        element:<Home/>

    },{
        path:'/shop',
        element:<Shop/>
    }
]

export default routes