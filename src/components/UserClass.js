import React from "react";

class UserClass extends React.Component {
    // constructor is the first method which will be called when we create an instance of this class
    // it is used to initialize the state of the component and bind the methods to the component
    // it is called only once in the lifecycle of the component
    // it is called before the render method is called

    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                bio: "dummy bio",
                location: "dummy location",
                avatar_url:
                    "https://avatars.githubusercontent.com/u/104777381?v=4",
            },
            isAvailable: false,
            workingHours: "9am - 6pm",
        };
        console.log("Child Constructor");
    }

    async componentDidMount() {
        console.log("Child component did mount");
        // API call to fetch data from github:
        const url = "https://api.github.com/users/" + this.props.name;
        const data = await fetch(url);
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo: json,
        });

        this.timer = setInterval(() => {
            console.log("Timer called");
        }, 1000);
    }

    // componentDidUpdate is called when the component is updated or re-rendered due to change in state or props
    componentDidUpdate(prevProps, prevState) {
        if (prevState.userInfo.bio !== this.state.userInfo.bio) {
            console.log("bio state has changed");
        }
        console.log("Child component did update");
    }

    // componentWillUnmount is called when the component is removed from the DOM or we navigate to another page
    componentWillUnmount() {
        clearInterval(this.timer);
        console.log("Child component will unmount");
    }

    render() {
        console.log("Child Render method");
        const { name, role } = this.props;
        const { bio, location, avatar_url } = this.state.userInfo;
        // debugger;

        return (
            <div className="user-card">
                <img src={avatar_url} alt="avatar" width={200} height={200} />
                <h2>Name: {name}</h2>
                <p>Role: {role}</p>
                <p>Bio: {bio}</p>
                <p>Location: {location}</p>
                <p>Shift: {this.state.workingHours}</p>
                <p>
                    Available to connect:{" "}
                    {this.state.isAvailable ? "Yes" : "No"}
                </p>
            </div>
        );
    }
}

export default UserClass;
