import {useCallback} from 'react';
import {useSelector} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import {fetchAlbumsViaID, fetchPhotos} from '../redux/albums/actions';
import {selectAlbums, selectPhotos} from '../redux/albums/selectors';
import {selectUsers} from '../redux/users/selectors';

export default function UserDetail() {
    const {id} = useParams();
    useFetch(fetchAlbumsViaID(id));
    const album = useSelector(selectAlbums);
    const user = useSelector(selectUsers);
    useFetch(fetchPhotos(id));
    const photos = useSelector(selectPhotos);
    const navigate = useNavigate();
    console.log(album, user);
    const goToUser = useCallback(
        (id) => {
            return () => navigate(`/users/${id}`);
        },
        [navigate]
    );
    if (!photos || !user || !album) {
        return <div>Loading...</div>;
    } else {
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
                    <span className="text-lg font-semibold text-black">
                        Creator:
                    </span>
                    {user.name}
                </div>

                {
                    <div className="grid grid-cols-5 gap-4 mt-4">
                        {photos.map((photo) => {
                            return (
                                <div>
                                    <img
                                        src={photo.thumbnailUrl}
                                        alt="placeholder"
                                    />
                                </div>
                            );
                        })}
                    </div>
                }
            </div>
        );
    }
}
