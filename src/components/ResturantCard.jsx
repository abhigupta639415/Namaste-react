const ResturantCard = (props) =>{
    const {restData} = props ;
     return(
        <div className="resturant-card">
            <img className="resturant-img" src={restData.card.info.img} alt="Resturant-logo"/>
            <h3>{restData.card.info.name}</h3>
            <h4>{restData.card.info.cuisines.join("-")}</h4>
            <h4> ⭐️⭐️⭐️⭐️⭐️ {restData.card.info.avgRating}</h4>
            <h4>₹ {restData.card.info.costForTwo/100} </h4>
            <h4>Delivery-Time: 30 mins</h4>
        </div>
     )
}
export default ResturantCard ;