import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';

const Navbar = () => {
    const { logout } = useLogout();

    const handleClick = () => {
        logout()
    }

    return (
        <div className="test">
            <h1>Welcome!</h1>
            <div>
                <button onClick={handleClick}>Log out</button>
            </div>
            <div>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
            </div>

        </div>
    )
}

export default Navbar;