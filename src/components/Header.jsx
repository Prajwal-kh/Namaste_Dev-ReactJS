import { useState } from "react";
import { LOGO_URL } from "../utils/config";
import { Link } from "react-router";
import useUserStatus from "../utils/useUserStatus";

const Header = () => {
    const [userLoginStatus, setUserLoginStatus] = useState("Login");
    const userStatus = useUserStatus();
    return (
        <div className="flex justify-between bg-amber-600 shadow-lg m-2">
            <div className="logo-container">
                <img
                    src={LOGO_URL}
                    alt="Food Delivery App logo"
                    className="w-15 m-3"
                />
            </div>
            {/* Don't use anchor tag to redirect to new paths in react as it can reload the app */}
            <div className="flex items-center">
                <ul className="flex p-3 m-3 text-lg font-medium">
                    <li className="px-4">
                        {userStatus ? "Online🟢" : "Offline🔴"}
                    </li>
                    <li className="px-2 hover:text-amber-50">
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li className="px-2 hover:text-amber-50">
                        <Link to={"/about"}>About</Link>
                    </li>
                    <li className="px-2 hover:text-amber-50">
                        <Link to={"/contact"}>Contact</Link>
                    </li>
                    <li className="px-2 hover:text-amber-50">
                        <Link to={"/grocery"}>Groceries</Link>
                    </li>
                    <li className="px-2 hover:text-amber-50">Cart</li>
                    <li className="pl-6">
                        <button
                            type="button"
                            className="logout-btn"
                            onClick={() =>
                                setUserLoginStatus(
                                    userLoginStatus === "Login"
                                        ? "Logout"
                                        : "Login",
                                )
                            }
                        >
                            {userLoginStatus}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
