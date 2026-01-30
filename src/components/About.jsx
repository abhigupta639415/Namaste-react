import User from "./User.jsx" ;
import UserClass from "./UserClass.jsx" ;
const About = () => {
    return (
        <div>
            <h1>About Us Page</h1>
            <p>This is the About Us page of our application. Here you can find more information about our mission, vision, and team.</p>
            <User name="Abhishek Gupta (Function)" />
            <UserClass name="Abhishek Gupta (Class)" />
        </div>
    )
} 

export default About ;