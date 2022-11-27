import {useCallback} from 'react';
import {useSelector} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import {selectUsers} from '../redux/users/selectors';
import useFetch from '../hooks/useFetch';
import {fetchUserViaID} from '../redux/users/actions';
import {fetchAlbumsViaUserID} from '../redux/albums/actions';
import {selectAlbums} from '../redux/albums/selectors';
export default function UserDetail() {
    const {id} = useParams();
    useFetch(fetchUserViaID(id));
    useFetch(fetchAlbumsViaUserID(id));
    const navigate = useNavigate();
    const goToAlbum = useCallback(
        (id) => {
            return () => navigate(`/albums/${id}`);
        },
        [navigate]
    );
    const user = useSelector(selectUsers);
    const albums = useSelector(selectAlbums);
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
            {albums.map((alb) => {
                return (
                    <div
                        onClick={goToAlbum(alb.id)}
                        className="text-sky-600 hover:text-red-400 cursor-pointer"
                    >
                        {alb.title}
                    </div>
                );
            })}
        </div>
    );
}
