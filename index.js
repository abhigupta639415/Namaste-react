
import React from "react" ;
import ReactDOM from "react-dom/client" ;

// React.createElement => Object => HTMLElement(render)
const heading = React.createElement("h1",{id:"heading"},"This is Heading");
const root = ReactDOM.createRoot(document.getElementById("root"));
const jsxHeading = (
    <h1 id="heading">Hello JSX !! 🚀</h1>
);


// React component 
const Title=()=>(
    <h1>This is React Component 🚀</h1>
)
// component composition
const Heading=()=>(
    <div>
         <Title/>
        <h1>This is Another React Component 🚀</h1>
    </div>
)

root.render(<Heading/>)