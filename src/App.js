import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Layout from './routes/Layout';
import NewUser from './routes/NewUser';
import ErrorPage from './routes/ErrorPage';
import UserDetail, {loader as userDetailLoader} from './routes/UserDetail';
import AllAlbums from './routes/AllAlbums';
import AllUsers from './routes/AllUsers';
import AlbumDetail, {loader as albumDetailLoader} from './routes/AlbumDetail';
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
                // loader: usersLoader,
                element: <AllUsers />,
            },
            {
                path: '/users/:id',
                loader: userDetailLoader,
                element: <UserDetail />,
            },
            {
                path: '/albums/:id',
                loader: albumDetailLoader,
                element: <AlbumDetail />,
            },
            {
                path: '/users/new',
                element: <NewUser />,
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
