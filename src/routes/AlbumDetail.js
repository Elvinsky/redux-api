import {Suspense, useCallback, useEffect, useState} from 'react';
import {Await, useLoaderData, useNavigate, useParams} from 'react-router-dom';
export const loader = ({params: {id}}) => {
    const albumPromise = fetch(
        `https://jsonplaceholder.typicode.com/albums/${id}`
    ).then((r) => r.json());
    return {albumPromise};
};
function loadUser(userId) {
    const userPromise = fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
    ).then((r) => r.json());
    return {userPromise};
}
export default function UserDetail() {
    const {albumPromise} = useLoaderData();
    const [photos, setPhotos] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
            .then((response) => response.json())
            .then((photos) => setPhotos(photos));
    }, [id]);
    const navigate = useNavigate();
    const goToUser = useCallback(
        (id) => {
            return () => navigate(`/users/${id}`);
        },
        [navigate]
    );
    if (!photos) {
        return <div>Loading...</div>;
    }
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Await resolve={albumPromise}>
                {(album) => {
                    const {userPromise} = loadUser(album.userId);
                    return (
                        <div className="p-3 border border-black w-fit">
                            <div>
                                <span className="text-lg font-semibold">
                                    Title:
                                </span>
                                {album.title}
                            </div>
                            <Suspense fallback={<div>Loading...</div>}>
                                <Await resolve={userPromise}>
                                    {(user) => {
                                        return (
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
                                        );
                                    }}
                                </Await>
                            </Suspense>
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
                }}
            </Await>
        </Suspense>
    );
}
