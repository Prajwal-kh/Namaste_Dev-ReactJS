import React from "react";
import ReactDOM from "react-dom/client";

const TitleComponent = () => {
    return <h2>Hello from Functional Component</h2>;
};

// Component Composition - Nesting of components
const HeadingComponent = () => {
    return (
        <div>
            {/* different ways to render a component */}
            <TitleComponent />
            <TitleComponent></TitleComponent>
            {TitleComponent()}
            <h1>This is a Heading Component</h1>
        </div>
    );
};

// We can put Functional Component inside React Element or vice-versa
const title = (
    <div id="title">
        Hello from React Element
        <HeadingComponent />
    </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(title);
