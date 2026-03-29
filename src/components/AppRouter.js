import { Navigate, Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../routes'
import { CHAT_ROUTE, LOGIN_ROUTE } from '../utils/const'

function AppRouter() {
    const user = false

    return user ? (
        <Routes>
            {privateRoutes.map(({ path, component }) => (
                <Route key={path} path={path} element={component} />
            ))}
            <Route path='*' element={<Navigate to={CHAT_ROUTE} replace />} />
        </Routes>
    ) : (
        <Routes>
            {publicRoutes.map(({ path, component }) => (
                <Route key={path} path={path} element={component} />
            ))}
            <Route path='*' element={<Navigate to={LOGIN_ROUTE} replace />} />
        </Routes>
    )
}

export default AppRouter
