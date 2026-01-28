// In the console we get ReferenceError: React is not defined
// Because React is not imported in this file
import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "h1",
    { id: "heading", className: "header" },
    "Hello world from React!!",
);

console.log(heading); // gives object representation of the heading
/*
{
    "type": "h1",
    "key": null,
    "ref": null,
    "props": {
        "id": "heading",
        "className": "header",
        "children": "Hello world from React!!"
    },
    "_owner": null,
    "_store": {}
}
*/

// similarly we can create nested react elements also
/* create nested react element for this nested html code
<div id="parent">
    <div id="child">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>
    </div>
</div>
*/

const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", {}, "I am h2 tag"),
    ]),
    // sibings elements (for eg h1 & h2) can be passed as array in the third argument of createElement
);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(parent);
