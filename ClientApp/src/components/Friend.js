import React from 'react';

const Friend = ({ otherUser }) => {
    return (
        <div className="row m-0">
            <div className="col-auto mt-0 m-2 p-1 ps-3 pe-3 border shadow rounded-pill">
                {otherUser.username}
            </div>
        </div>
    )
}
export default Friend;