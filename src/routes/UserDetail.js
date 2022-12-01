import {useCallback} from 'react';
import {useSelector} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import {selectUserViaID} from '../redux/users/selectors';
import useFetch from '../hooks/useFetch';
import {selectAlbumsViaUserID} from '../redux/albums/selectors';
import {fetchUsers} from '../redux/users/actions';
import {fetchAlbums} from '../redux/albums/actions';
export default function UserDetail() {
    const {id} = useParams();
    const navigate = useNavigate();
    const user = useSelector((store) => selectUserViaID(store, +id));
    useFetch(fetchUsers());
    useFetch(fetchAlbums());
    const goToAlbum = useCallback(
        (id) => {
            return () => navigate(`/albums/${id}`);
        },
        [navigate]
    );
    const userAlbums = useSelector((store) =>
        selectAlbumsViaUserID(store, +id)
    );
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
                    <span className="text-lg font-semibold">Email:</span>{' '}
                    {user.email}
                </div>
            </div>
            {userAlbums.map((alb) => {
                return (
                    <div
                        onClick={goToAlbum(alb.id)}
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
