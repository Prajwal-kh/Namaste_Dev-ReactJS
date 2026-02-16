import React from "react";

const User = ({ name }) => {
    return (
        <div className="user-card">
            <h2>{name}</h2>
            <p>Software Engineer</p>
            <p>gmail: praj@gmail.com</p>
        </div>
    );
};

export default User;
