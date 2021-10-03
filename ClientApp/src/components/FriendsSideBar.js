import React from "react";
import Friend from "./Friend";

const FriendsSideBar = ({ otherUsersArray }) => {
    return (
        <div className="container p-0 pt-1 h-100 border-end border-secondary border-4">
            <div className="row justify-content-center m-0 mb-3 p-0 ps-4 pe-4 mt-4 pb-2 border-bottom h5 header">
                Users Online
            </div>
            {(otherUsersArray) && otherUsersArray.map((otherUser) => (
                <Friend key={otherUser.userId} otherUser={otherUser} />
            ))}
        </div>
    );
};

export default FriendsSideBar;