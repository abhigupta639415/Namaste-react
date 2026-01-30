import {useEffect} from "react";

const ResturantMenu = () => {

     useEffect( () => {
        fetchMenu() ;
     }, []) ;
    
        const fetchMenu = async () => {
            const data = await fetch ();
        }

    return (
        <div>
            <h1>Resturant Menu Page</h1>
            <p>Welcome to the Resturant Menu page. Here you can explore our delicious offerings and choose your favorite dishes.</p>
        </div>
    )
} ;

export default ResturantMenu ;
