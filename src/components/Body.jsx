import ResturantCard from "./ResturantCard"
import { useState } from "react";


const Body = () =>{

  const [restaurants, setListOfRestaurants] = useState([
  {
    card: {
      info: {
        name: "Blue Tokai Coffee Roasters",
        city: "Delhi",
        costForTwo: "30000",
        costForTwoMessage: "₹300 for two",
        cuisines: ["Coffee", "Beverages"],
        avgRating: 4.7,
        "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw41LvXnTEhtLvIH2gt8-zz36ryqjc8tFr2Q&s",
      },
    },
  },
  {
    card: {
      info: {
        name: "Cafe Coffee Day",
        city: "Delhi",
        costForTwo: "25000",
        costForTwoMessage: "₹250 for two",
        cuisines: ["Coffee"],
        avgRating: 3.9,
        "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Vg4ZOCkKj41ddeRMuJPW6Hh4UON7L_plRA&s",
      },
    },
  },
]) ;
    return(
        <div className="body">
            <button className="top-btn" 
            onClick={()=>{
               const filteredRestaurants = restaurants.filter( (res)=> res.card.info.avgRating > 4) ;
               setListOfRestaurants(filteredRestaurants);
             }
            }
            > Top Rated Restaurant</button>
            <div className="resturant-list">
                {restaurants.map( (res,index)=>
                    <ResturantCard
                    key={index}
                    restData={res}
                    />
                )}
                {/* <ResturantCard restName="Burger King" Cuisine="Burger , Pizza"/> */}
            </div>
        </div>
    )
}
export default Body ;