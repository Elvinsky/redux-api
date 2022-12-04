import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Layout from './routes/Layout';
import ErrorPage from './routes/ErrorPage';
import UserDetail from './routes/UserDetail';
import AllAlbums from './routes/AllAlbums';
import AllUsers from './routes/AllUsers';
import AlbumDetail from './routes/AlbumDetail';
const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/albums',
                element: <AllAlbums />,
            },
            {
                path: '/users',
                element: <AllUsers />,
            },
            {
                path: '/users/:id',
                element: <UserDetail />,
            },
            {
                path: '/albums/:id/:userId',
                element: <AlbumDetail />,
            },

            {
                path: '*',
                element: <ErrorPage />,
            },
        ],
    },
]);
export default function App() {
    return <RouterProvider router={router} />;
}
