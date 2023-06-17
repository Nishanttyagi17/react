import React from "react";
import ReactDOM from "react-dom/client";
const head = React.createElement("h1", {}, "Hello react ki duniya");
const head2 = React.createElement("h3", {id: "heading2"}, "Hello react ki duniya2");
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(head);
// root.render(head2);

// normal react element
const dom = React.createElement(
    "div",
    {id: "parent"},
    React.createElement(
        "div",
        {id: "child"}, [
        React.createElement("h1", {}, "this is nested structure"),
        React.createElement("h2", {}, "this is nested structure 2")

            ]    )
);

// Jsx element
const heading = (
    <h1> Hi how are you</h1>
);

// Functional component

const FirstComponent = () => {
    return <h1> hello world</h1>;
};

//Component composition: using one component inside another

const SecondComp = () => (
    // here we don't require return as we are not using curly braces in this functional component
    <div>
         < FirstComponent />
    <h1> hello developer</h1>
    </div>
   
);
root.render(<SecondComp/>);