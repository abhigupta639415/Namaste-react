// const heading = React.createElement(
//     "h1",
//     {id: "heading"},
//     "Hello World From React !!"
// );
import React from "react" ;
import ReactDOM from "react-dom/client" ;
const parent = React.createElement(
    "div",
    {id: "parent"},
    [React.createElement("div",{id: "child1",key: "c1"},
        [React.createElement("h1",{key:"g1"}, "Hello Abhishek !! 🚀 "),
             React.createElement("h2",{key: "k1"}, "Hello Ankit !!")]),
    React.createElement("div",{id: "child2",key: "c2"},
        [React.createElement("h1",{key:"g2"}, "Hello Abhishek !!"), 
            React.createElement("h2",{key: "k2"}, "Hello Ankit !!")])]
) ;
console.log(parent) ; // object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);