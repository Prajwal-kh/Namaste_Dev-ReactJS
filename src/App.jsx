import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import MenuCard from "./components/MenuCard";
import Shimmer from "./components/Shimmer";
import { UserContext } from "./utils/UserContext";
// import Grocery from "./components/Grocery";

const Home = lazy(() => import("./components/Body"));
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
    const [userName, setUserName] = useState("");
    useEffect(() => {
        // fetch user:
        setUserName("New User");
    }, []);

    return (
        <div className="app">
            {/* overriden userName is only accessible to Header component */}
            {/* Also passed in setUserName func to modify the context anytime we want from any Header's child component as we have wrapped only header component */}
            {/* To use it we have use useContext hook & then destructure & call this setUserName func */}
            <UserContext.Provider
                value={{ loggedInUser: userName, setUserName }}
            >
                <Header />
            </UserContext.Provider>
            <Outlet />
            <Footer />
        </div>
    );
};
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: (
                    <Suspense fallback={<Shimmer />}>
                        <Home />
                    </Suspense>
                ),
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/grocery",
                element: (
                    <Suspense fallback={"Loading groceries..."}>
                        <Grocery />
                    </Suspense>
                ),
            },
            {
                path: "/restaurant/:id",
                element: <MenuCard />,
            },
        ],
        errorElement: <ErrorPage />,
    },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
