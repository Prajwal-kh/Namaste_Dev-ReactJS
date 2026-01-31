import React from "react";
import ReactDOM from "react-dom/client";

// Functional Component
const HeadingComponent = () => {
    return <h1>Hello from Functional Component</h1>;
};
// Way to write Functional Component in JSX
const HeadingComponent2 = () => <h1>Hello from JSX Element</h1>;

const HeadingComponent3 = () => (
    <h1 className="heading">Hello from Multi-line JSX Element</h1>
);
const HeadingComponent4 = () => {
    return (
        <h1 className="heading">
            Hello from Multi-line JSX Element with return
        </h1>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
