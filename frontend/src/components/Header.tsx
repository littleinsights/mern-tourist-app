import { Link } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';
import SignOutButton from './SignOutButton';

const Header = () => {
    const {isLoggedIn} = useAppContext();
    return (
        <div className="bg-green-500 py-6">
            <div className="container mx-auto flex justify-between">
                <span className="text-3xl text-white font-bold tracking-tight">
                    <Link to="/">EpicJourneysHub.com</Link>
                </span>
                <span className="flex  space-x-2">
    {isLoggedIn ? (
        <>
            <Link className="flex items-center text-green-600 px-3 font-bold  bg-white rounded : " to="/my-booking">My Bookings</Link>
            <Link  className=" flex bg-white items-center  text-green-600 px-3 font-bold hover:text-gray-800 rounded" to="/my-hotels">My Hotels</Link>
            <SignOutButton/>
        </> 
    ) : (
        <Link to="/sign-in" className=" flex bg-white items-center  text-green-600 px-3 font-bold hover:text-gray-800 rounded">
            Sign In
        </Link>
    )}
</span>

            </div>
        </div>
    );
};

export default Header;
