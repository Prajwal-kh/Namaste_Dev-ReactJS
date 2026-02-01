import React from "react";
import ReactDOM from "react-dom/client";

// Creating Nested Headers using React.createElement() which returns a React element
const headersStack = React.createElement("div", { id: "title" }, [
    React.createElement("h1", { key: "h1" }, "This is H1 tag"),
    React.createElement("h2", { key: "h2" }, "This is H2 tag"),
    React.createElement("h3", { key: "h3" }, "This is H3 tag"),
]);

// Creating Nested Headers with Functional Component
const HeaderStack = () => {
    return (
        <div id="title">
            <h1>This is H1 tag</h1>
            <h2>This is H2 tag</h2>
            <h3>This is H3 tag</h3>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(headersStack);
root.render(<HeaderStack />);

/********************************************** NOTES ****************************************************************/
// <HeaderStack />  is a Functional Component (A Function which returns JSX)
// When you call it with JSX it becomes an React Element
const element = <HeaderStack />;
console.log(element); // { type: HeaderStack, props: {}, ... }
