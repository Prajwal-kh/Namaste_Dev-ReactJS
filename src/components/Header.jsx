import { useState } from "react";
import { LOGO_URL } from "../utils/config";
import { Link } from "react-router";
import useUserStatus from "../utils/useUserStatus";

const Header = () => {
    const [userLoginStatus, setUserLoginStatus] = useState("Login");
    const userStatus = useUserStatus();
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    src={LOGO_URL}
                    alt="Food Delivery App logo"
                    className="logo"
                />
            </div>
            {/* Don't use anchor tag to redirect to new paths in react as it can reload the app */}
            <div className="nav-items">
                <ul>
                    <li>{userStatus ? "Online🟢" : "Offline🔴"}</li>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/about"}>About</Link>
                    </li>
                    <li>
                        <Link to={"/contact"}>Contact</Link>
                    </li>
                    <li>
                        <Link to={"/grocery"}>Groceries</Link>
                    </li>
                    <li>Cart</li>
                    <li>
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
