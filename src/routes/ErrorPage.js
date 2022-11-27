import {useCallback} from 'react';
import {useNavigate} from 'react-router-dom';

export default function ErrorPage() {
    const navigate = useNavigate();
    const goHome = useCallback(() => {
        return () => navigate('/');
    }, [navigate]);
    return (
        <div>
            <h1>Something gone wrong =\</h1>
            <button
                onClick={goHome()}
                className="text-lg cursor-pointer hover:text-red-500 underline"
            >
                Go back
            </button>
        </div>
    );
}
