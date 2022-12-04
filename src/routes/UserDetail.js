import {useCallback} from 'react';
import {useSelector} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import {
    selectUsersError,
    selectUsersLoading,
    selectUserViaID,
} from '../redux/users/selectors';
import useFetch from '../hooks/useFetch';
import {selectAlbumsLoading, selectAlbumsViaUserID} from '../redux/albums/selectors';
import {fetchUsers} from '../redux/users/actions';
import {fetchAlbums} from '../redux/albums/actions';

export default function UserDetail() {
    const {id} = useParams();
    useFetch(fetchUsers());
    useFetch(fetchAlbums());
    const userLoading = useSelector(selectUsersLoading);
    const albumLoading = useSelector(selectAlbumsLoading);
    const navigate = useNavigate();
    const user = useSelector((store) => selectUserViaID(store, +id));
    const validation = () => {
        if (!userLoading && !user) navigate('/error');
        if (userLoading || albumLoading || !user) return <div>Loading...</div>;
    };
    const goToAlbum = useCallback(
        (id, userId) => {
            return () => navigate(`/albums/${id}/${userId}`);
        },
        [navigate]
    );
    const userAlbums = useSelector((store) => selectAlbumsViaUserID(store, +id));
    validation();
    return (
        <div className="p-3 border border-black w-fit">
            <div className=" border-b border-neutral-500 border-dashed">
                <div>
                    <span className="text-lg font-semibold">Name: </span>
                    {user.name}
                </div>
                <div>
                    <span className="text-lg font-semibold">Username: </span>
                    {user.username}
                </div>
                <div>
                    <span className="text-lg font-semibold">Email:</span> {user.email}
                </div>
            </div>

            {userAlbums.map((alb) => {
                return (
                    <div
                        onClick={goToAlbum(alb.id, alb.userId)}
                        className="text-sky-600 hover:text-red-400 cursor-pointer"
                        key={alb.id}
                    >
                        {alb.title}
                    </div>
                );
            })}
        </div>
    );
}
