import {useCallback} from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import {fetchAlbums} from '../redux/albums/actions';
import {fetchUsers} from '../redux/users/actions';
import {selectUsers} from '../redux/users/selectors';
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
    if (users.loading) return <div>Loading...</div>;
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
