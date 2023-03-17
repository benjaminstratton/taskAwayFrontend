import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

const Navbar = () => {
    const { logout } = useLogout();
    const { user } = useAuthContext();

    const handleClick = () => {
        logout()
    }

    return (
        <div className="navigation">
            <h1>Welcome!</h1>
            {user && (
                <div>
                    <button onClick={handleClick}>Log out</button>
                </div>
            )}
            {!user && (
                <div>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                </div>
            )}

        </div>
    )
}

export default Navbar;