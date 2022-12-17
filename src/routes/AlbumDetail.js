import {useCallback} from 'react';
import {useSelector} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import {fetchAlbums, fetchPhotos} from '../redux/albums/actions';
import {
    selectAlbumsLoading,
    selectAlbumViaID,
    selectPhotosViaAlbumID,
} from '../redux/albums/selectors';
import {fetchUsers} from '../redux/users/actions';
import {selectUsersLoading, selectUserViaID} from '../redux/users/selectors';
export default function UserDetail() {
    useFetch(fetchPhotos());
    useFetch(fetchAlbums());
    useFetch(fetchUsers());
    const {id, userId} = useParams();
    const navigate = useNavigate();
    const userLoading = useSelector(selectUsersLoading);
    const albumLoading = useSelector(selectAlbumsLoading);
    const photos = useSelector((store) => selectPhotosViaAlbumID(store, +id));
    const album = useSelector((store) => selectAlbumViaID(store, +id));
    const user = useSelector((store) => selectUserViaID(store, +userId));
    const goToUser = useCallback(
        (id) => {
            return () => navigate(`/users/${id}`);
        },
        [navigate]
    );
    if (!userLoading && !user) navigate('/error');
    if (userLoading || !user) return <div>Loading...</div>;
    if (!albumLoading && !album) navigate('/error');
    if (albumLoading || !album) return <div>Loading...</div>;

    return (
        <div className="p-3 border border-black w-fit">
            <div>
                <span className="text-lg font-semibold">Title:</span>
                {album.title}
            </div>
            <div
                key={user.id}
                onClick={goToUser(user.id)}
                className="text-sky-600 hover:text-red-400 cursor-pointer"
            >
                <span className="text-lg font-semibold text-black">Creator:</span>
                {user.name}
            </div>

            {
                <div className="grid grid-cols-5 gap-4 mt-4">
                    {photos.map((photo) => {
                        return (
                            <div key={photo.id}>
                                <img src={photo.thumbnailUrl} alt="placeholder" />
                            </div>
                        );
                    })}
                </div>
            }
        </div>
    );
}
