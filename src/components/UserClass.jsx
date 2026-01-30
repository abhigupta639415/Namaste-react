import React from "react";
class UserClass extends React.Component {
     constructor (props){
        super (props) ;
     }

    render(){
        return (
          <div className="about-card">
            <h2>Name : {this.props.name}</h2>
            <h2>Location : Delhi</h2>
            <h2>Education : B.Tech in Computer Science Engineering</h2>
            
            <h2>Contact : abhishekgupta12345@gmail.com</h2>
          </div>
        )
    }
}
export default UserClass ;