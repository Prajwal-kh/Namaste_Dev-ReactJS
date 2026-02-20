import { useContext, useState, useRef, useEffect } from "react";
import { LOGO_URL } from "../utils/config";
import { Link } from "react-router";
import useUserStatus from "../utils/useUserStatus";
import { UserContext } from "../utils/UserContext";

const Header = () => {
    const userStatus = useUserStatus();
    const { loggedInUser } = useContext(UserContext);

    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [showDropdown, setShowDropdown] = useState(false);

    const dropdownRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setShowDropdown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="flex justify-between bg-amber-600 shadow-lg m-2">
            <div className="logo-container">
                <img
                    src={LOGO_URL}
                    alt="Food Delivery App logo"
                    className="w-15 m-3"
                />
            </div>

            <div className="flex items-center">
                <ul className="flex p-3 m-3 text-lg font-medium items-center">
                    <li className="px-4">
                        {userStatus ? "Online🟢" : "Offline🔴"}
                    </li>
                    <li className="px-2 hover:text-amber-50">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-2 hover:text-amber-50">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="px-2 hover:text-amber-50">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="px-2 hover:text-amber-50">
                        <Link to="/grocery">Groceries</Link>
                    </li>

                    {isLoggedIn && (
                        <li className="relative px-2" ref={dropdownRef}>
                            <div
                                className="cursor-pointer hover:text-amber-50"
                                onClick={() => setShowDropdown((prev) => !prev)}
                            >
                                {loggedInUser}
                            </div>

                            {showDropdown && (
                                <div className="absolute mt-2 w-32 bg-white text-black shadow-md rounded-md">
                                    <button
                                        className="block w-full py-2 hover:cursor-pointer"
                                        onClick={() => {
                                            setIsLoggedIn(false);
                                            setShowDropdown(false);
                                        }}
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </li>
                    )}

                    {!isLoggedIn && (
                        <li className="px-2">
                            <button
                                className="bg-white text-black px-3 py-1 rounded-md"
                                onClick={() => setIsLoggedIn(true)}
                            >
                                Login
                            </button>
                        </li>
                    )}

                    <li className="pl-4 hover:text-amber-50">Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
