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
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
// import Grocery from "./components/Grocery";

const Home = lazy(() => import("./components/Body"));
const Grocery = lazy(() => import("./components/Grocery"));
const Cart = lazy(() => import("./components/Cart"));

const AppLayout = () => {
    const [userName, setUserName] = useState("");
    useEffect(() => {
        // fetch user:
        setUserName("New User");
    }, []);

    return (
        <div className="app">
            <Provider store={appStore}>
                {/* overriden userName is only accessible to Header component */}
                {/* Also passed in setUserName func to modify the context anytime we want from any Header's child component as we have wrapped only header component */}
                {/* To use it we have use useContext hook & then destructure & call this setUserName func */}
                <UserContext.Provider
                    value={{ loggedInUser: userName, setUserName }}
                >
                    <Header />
                </UserContext.Provider>
                <Suspense fallback={<Shimmer />}>
                    <Outlet />
                </Suspense>
                <Footer />
            </Provider>
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
                element: <Home />,
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
                element: <Grocery />,
            },
            {
                path: "/restaurant/:id",
                element: <MenuCard />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
        ],
        errorElement: <ErrorPage />,
    },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
