const head = React.createElement("h1", {}, "Hello react ki duniya");
const head2 = React.createElement("h3", {id: "heading2"}, "Hello react ki duniya2");
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(head);
// root.render(head2);

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
root.render(dom);