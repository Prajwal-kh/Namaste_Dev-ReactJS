import React from "react";

class UserClass extends React.Component {
    // constructor is the first method which will be called when we create an instance of this class
    // it is used to initialize the state of the component and bind the methods to the component
    // it is called only once in the lifecycle of the component
    // it is called before the render method is called

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            isAvailable: false,
            workingHours: "9am - 6pm",
        };
        console.log("Child Constructor");
    }

    componentDidMount() {
        console.log("Child component did mount");
    }

    render() {
        console.log("Child Render method");
        const { name, role } = this.props;
        const { count, isAvailable, workingHours } = this.state;
        const handleOnClick = () => {
            this.setState({
                count: count + 1,
                isAvailable: !isAvailable,
            });
        };

        return (
            <div className="user-card">
                <h2>{name}</h2>
                <p>{role}</p>
                <p>gmail: praj@gmail.com</p>
                <p>Count: {count}</p>
                <button onClick={handleOnClick}>+</button>
                <p>Shift: {workingHours}</p>
                <p>
                    Available to connect: {isAvailable === true ? "Yes" : "No"}
                </p>
            </div>
        );
    }
}

export default UserClass;
