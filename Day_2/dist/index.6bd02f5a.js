const heading = React.createElement("h1", {
    id: "title"
}, "Namaste Everyone!!!");
const heading2 = React.createElement("h2", {
    id: "title1",
    hello: "Wow"
}, "Namaste React!!!");
const container = React.createElement("div", {
    id: "container"
}, [
    heading,
    heading2
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

//# sourceMappingURL=index.6bd02f5a.js.map
