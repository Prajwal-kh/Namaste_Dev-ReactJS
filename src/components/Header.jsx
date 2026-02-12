import { useState } from "react";
import { LOGO_URL } from "../utils/config";
import { Link } from "react-router";

const Header = () => {
    const [userStatus, setUserStatus] = useState("Login");
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
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/about"}>About</Link>
                    </li>
                    <li>
                        <Link to={"/contact"}>Contact</Link>
                    </li>
                    <li>Cart</li>
                    <li>
                        <button
                            type="button"
                            className="logout-btn"
                            onClick={() =>
                                setUserStatus(
                                    userStatus === "Login" ? "Logout" : "Login",
                                )
                            }
                        >
                            {userStatus}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
