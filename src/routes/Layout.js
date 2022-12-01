import {useEffect} from 'react';
import {Outlet, NavLink, useNavigate} from 'react-router-dom';
import './Layout.css';
export default function Layout() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/users');
    }, []);
    return (
        <div className="m-2 ml-5">
            <header className="flex gap-5 font-semibold mb-5">
                <NavLink
                    to="/albums"
                    end={true}
                    className={({isActive}) =>
                        isActive
                            ? 'link-active border border-black p-1 '
                            : 'border border-black p-1'
                    }
                >
                    Albums
                </NavLink>
                <NavLink
                    to="/users"
                    className={({isActive}) =>
                        isActive
                            ? 'link-active border border-black p-1'
                            : 'border border-black p-1'
                    }
                >
                    Users
                </NavLink>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}
