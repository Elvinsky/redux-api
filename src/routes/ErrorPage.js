import {useCallback} from 'react';
import {useNavigate} from 'react-router-dom';

export default function ErrorPage() {
    const navigate = useNavigate();
    // const goHome = useCallback(() => {
    //     return () => navigate('/');
    // }, [navigate]);
    const handleNav = useCallback(
        (navUrl) => {
            return () => navigate(navUrl);
        },
        [navigate]
    );
    return (
        <div className="flex flex-col gap-2">
            <h1>Something gone wrong =\</h1>
            <div className="flex flex-row gap-2">
                <button
                    onClick={handleNav('/users')}
                    className="text-lg cursor-pointer hover:text-red-500 underline"
                >
                    Users
                </button>
                <button
                    onClick={handleNav('/albums')}
                    className="text-lg cursor-pointer hover:text-red-500 underline"
                >
                    Albums
                </button>
            </div>
        </div>
    );
}
