import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "h1",
    { id: "heading", className: "header" },
    "Hello world from React!!",
);

// Babel Transpilation JSX to JS
// JSX => Babel transpiles it to React.createElement => ReactElement which is a JS Object => HTML (DOM)
const jsxHeading = <h1 id="heading">Hello world from JSX!!</h1>;

// when line breaks jsx should be in ()
const jsxHeading2 = (
    <h1 id="heading" className="header">
        Hello world from JSX 2!!
    </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
