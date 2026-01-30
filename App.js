
import React from "react" ;
import ReactDOM from "react-dom/client" ;
import Header from "./src/components/Header.jsx" ;
import Body from "./src/components/Body.jsx" ;
import About from "./src/components/About.jsx" ;
import Contact from "./src/components/Contact.jsx" ;
import ResturantMenu from "./src/components/ResturantMenu.jsx" ;
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
//import { BrowserRouter, Routes, Route } from "react-router-dom";


const Apps = () => {
    return(
    <div className="app"> 
      <Header/>
      <Outlet/>
    </div>

    );
}
    

const appRouter = createBrowserRouter ([
    {
      path:"/" ,
      element:<Apps/>,
      children:[
        {
          path:"/",
          element:<Body/>
        },
      {
      path:"/about",
      element:<About/>
    },
    {
      path:"/contact",
      element:<Contact/>
    },
    {
      path:"/resturants/:resId",
      element:<ResturantMenu/>
    } ,
    ],
      errorElement:<h1> Oops! Page Not Found </h1>
    },

]) ;


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);