import loadable from 'react-loadable'
import Loading from '../../components/Loading'

export const Home = loadable({
    loader: () => import('./Home'),
    loading: Loading
})

const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    }
]

export default routes