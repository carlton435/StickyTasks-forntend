import { Navigate } from 'react-router-dom'
import SignIn from '../components/Body/login'
import SignUp from '../components/Body/signup'
import Home from '../components/Body/home'
import Article from '../components/Body/article'


const route = [{
    path: '/signup', element: <SignUp />
}, {
    path: '/login', element: <SignIn />,
}, {

    path: '/home', element: <Home />,

},
{ path: 'article', element: <Article /> },
{
    path: '/', element: <Navigate to={'/login'} />
}]

export default route