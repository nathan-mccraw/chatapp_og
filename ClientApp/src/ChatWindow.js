import React from "react";

const ChatWindow = ({ messageArray }) => {

    console.log(messageArray[0]);
    return (
        <div className="row flex-grow-1 m-4 p-4 pt-0 pb-0 border border-3 border-secondary rounded shadow">
            <div className="col">
                {messageArray &&
                    messageArray.map((message) => (
                        <div className="row align-items-baseline m-3" key={message.messageId}>
                            <div className="col-auto ms-4">{message.userName}: </div>
                            <div className="col text-light bg-info me-1 ms-1 p-1 ps-2 pe-3 shadow border border-dark rounded">
                                {message.text}
                            </div>
                            {/*<div*/}
                            {/*    className="col-auto fw-lighter"*/}
                            {/*    style={{ letterSpacing: ".15rem" }}*/}
                            {/*>*/}
                            {/*    {{message.dateCreated.toLocaleString()}}*/}
                            {/*</div>*/}
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default ChatWindow;