/* 
1. If we perform the React.createElement a JS object will be created and while redering the browser understands it as 
    a html element.

*/ /* const head = React.createElement("h1",{id:"heading"},"This is the first head")
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(head) */ /* This is the nested kind of structure 
- If we want to give more number of children to the child div element we have to wrap them in an array 
*/ const head = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child1"
    }, [
        React.createElement("h1", {
            id: "headele"
        }, "This is the first head element"),
        React.createElement("h2", {
            id: "headeles"
        }, "This is the second head element"),
        React.createElement("h3", {
            id: "headelet"
        }, "This is the third head element")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {
            id: "headele"
        }, "This is the first head element"),
        React.createElement("h2", {
            id: "headeles"
        }, "This is the second head element"),
        React.createElement("h3", {
            id: "headelet"
        }, "This is the third head element")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(head);

//# sourceMappingURL=index.6bd02f5a.js.map
