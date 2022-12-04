import {useCallback} from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import {fetchAlbums} from '../redux/albums/actions';
import {selectAlbums} from '../redux/albums/selectors';

export default function AllAlbums() {
    useFetch(fetchAlbums());
    const navigate = useNavigate();
    const goToAlbum = useCallback(
        (id, userId) => {
            return () => navigate(`/albums/${id}/${userId}`);
        },
        [navigate]
    );
    const albums = useSelector(selectAlbums);
    return (
        <div className="p-3 border border-black w-fit">
            {albums.map((album) => (
                <div
                    key={album.id}
                    onClick={goToAlbum(album.id, album.userId)}
                    className="text-lg border-b border-neutral-500 border-dashed hover:text-red-400	cursor-pointer	"
                >
                    {album.title}
                </div>
            ))}
        </div>
    );
}
