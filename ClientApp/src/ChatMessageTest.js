import React from 'react';

const ChatMessageTest = ({ message }) => {
    return (
        <div className="row align-items-baseline m-3">
            <div className="col-auto ms-4">{message.userName}: </div>
            <div className="col text-light bg-info me-1 ms-1 p-1 ps-2 pe-3 shadow border border-dark rounded">
                {message.text}
            </div>
        </div>
    )
}

export default ChatMessageTest;