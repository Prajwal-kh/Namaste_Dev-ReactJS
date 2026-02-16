import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
        console.log("Parent Constructor");
    }

    componentDidMount() {
        console.log("Parent component did mount");
    }

    render() {
        console.log("Parent Render method");
        return (
            <div>
                <h1>About Us</h1>
                <p>
                    Welcome to our food delivery app! We are passionate about
                    bringing delicious meals from your favorite restaurants
                    right to your doorstep. Our mission is to provide a seamless
                    and enjoyable food delivery experience for our customers. We
                    work with a wide range of restaurants to offer a diverse
                    selection of cuisines, ensuring that there is something for
                    everyone. Our team is dedicated to delivering your food
                    quickly and efficiently, while maintaining the highest
                    quality standards. Thank you for choosing our app for your
                    food delivery needs!
                </p>
                <p>Our Team</p>
                <UserClass name={"Prajwal's Class"} role={"Developer"} />
            </div>
        );
    }
}
export default About;
