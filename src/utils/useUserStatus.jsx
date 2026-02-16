import { useEffect, useState } from "react";

const useUserStatus = () => {
    const [userStatus, setUserStatus] = useState(true); // assuming user is online by default

    useEffect(() => {
        window.addEventListener("online", () => {
            setUserStatus(true);
        });
        // if we turn off the internet or select offline in network tab in dev tools then this event
        // will be triggered and we can set the user status to offline
        window.addEventListener("offline", () => {
            setUserStatus(false);
        });
        return () => {
            window.removeEventListener("online", () => {
                setUserStatus(true);
            });
            window.removeEventListener("offline", () => {
                setUserStatus(false);
            });
        };
    }, []);

    return userStatus;
};

export default useUserStatus;
