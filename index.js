// const heading = React.createElement(
//     "h1",
//     {id: "heading"},
//     "Hello World From React !!"
// );
const parent = React.createElement(
    "div",
    {id: "parent"},
    [React.createElement("div",{id: "child1"},[React.createElement("h1",{}, "Hello Abhishek !!"), React.createElement("h2",{}, "Hello Ankit !!")]),
    React.createElement("div",{id: "child2"},[React.createElement("h1",{}, "Hello Abhishek !!"), React.createElement("h2",{}, "Hello Ankit !!")])]
) ;
console.log(parent) ; // object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);