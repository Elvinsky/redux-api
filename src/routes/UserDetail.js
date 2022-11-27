import {Suspense, useCallback, useEffect, useState} from 'react';
import {Await, useLoaderData, useNavigate, useParams} from 'react-router-dom';
export const loader = ({params: {id}}) => {
    const userPromise = fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
    ).then((r) => r.json());
    return {userPromise};
};
export default function UserDetail() {
    const [albums, setAlbums] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
            .then((response) => response.json())
            .then((albums) => setAlbums(albums));
    }, [id]);
    const {userPromise} = useLoaderData();
    const navigate = useNavigate();
    const goToAlbum = useCallback(
        (id) => {
            return () => navigate(`/albums/${id}`);
        },
        [navigate]
    );
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Await resolve={userPromise}>
                {(user) => {
                    return (
                        <div className="p-3 border border-black w-fit">
                            <div className=" border-b border-neutral-500 border-dashed">
                                <div>
                                    <span className="text-lg font-semibold">
                                        Name:{' '}
                                    </span>
                                    {user.name}
                                </div>
                                <div>
                                    <span className="text-lg font-semibold">
                                        Username:{' '}
                                    </span>
                                    {user.username}
                                </div>
                                <div>
                                    <span className="text-lg font-semibold">
                                        Email:
                                    </span>{' '}
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
                }}
            </Await>
        </Suspense>
    );
}
