import { CHAT_ROUTE, LOGIN_ROUTE } from './utils/const'
import Login from './components/Login'
import Chat from './components/Chat'

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        component: <Login />,
    },
]

export const privateRoutes = [
    {
        path: CHAT_ROUTE,
        component: <Chat />,
    },
]
