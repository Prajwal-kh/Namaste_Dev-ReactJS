import { useRouteError } from "react-router";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h1>{error.status}</h1>
            <h2>{error.statusText}</h2>
            <p>
                Oops! The page you are looking for does not exist. It might have
                been moved or deleted. Please check the URL and try again.
            </p>
            <p>{error.data}</p>
        </div>
    );
};

export default ErrorPage;
