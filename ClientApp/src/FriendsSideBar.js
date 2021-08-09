import React from "react";

const FriendsSideBar = ({ otherUsersArray }) => {
  return (
    <div className="container p-0 pt-1 pe-4 h-100 border-end border-secondary border-4">
      <div className="row justify-content-center m-0 mb-3 p-0 mt-4 pb-2 border-bottom h5 header">
        Other Users
      </div>
      {(otherUsersArray) && otherUsersArray.map((otherUser) => (
        <div className="row m-0">
          <div className="col-auto m-2 p-1 ps-3 pe-3 border shadow rounded-pill">
            {otherUser.userName}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FriendsSideBar;
