import { useState } from "react";
import { LOGO_URL } from "../utils/config";

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
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
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
