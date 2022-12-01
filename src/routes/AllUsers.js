import {useCallback} from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import {fetchAlbums} from '../redux/albums/actions';
import {selectAlbumsViaUserID} from '../redux/albums/selectors';
import {fetchUsers} from '../redux/users/actions';
import {selectUsers, selectUserViaID} from '../redux/users/selectors';
export default function AllUsers() {
    const navigate = useNavigate();
    useFetch(fetchUsers());
    useFetch(fetchAlbums());
    const goToUser = useCallback(
        (id) => {
            return () => navigate(`/users/${id}`);
        },
        [navigate]
    );
    const users = useSelector(selectUsers);
    const user = useSelector((store) => selectUserViaID(store, 1));
    const albums = useSelector((store) => selectAlbumsViaUserID(store, 1));
    return (
        <div className="p-3 border border-black w-fit">
            {users.map((user) => (
                <div
                    key={user.id}
                    onClick={goToUser(user.id)}
                    className="text-lg border-b border-neutral-500 border-dashed hover:text-red-400	cursor-pointer	"
                >
                    {user.name}
                </div>
            ))}
        </div>
    );
}
