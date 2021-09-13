import React from 'react';

const Message = ({ message, prevDate }) => {
    
    let isNotSameDate = true;
    let currentDate = new Date(message.dateCreated);
    if (currentDate.getDate() === prevDate.getDate()) isNotSameDate = false;
    console.log(`currentDate:${currentDate.getDate()} === prevDate:${prevDate.getDate()}`);
    prevDate = message.dataCreated;

    return (
        <div className="row align-items-baseline m-3" key={message.messageId}>
            {isNotSameDate &&
                <div>
                <hr className = "mb-0" style={{ color: 'red', height: 4 }} />
                <div className="col-auto fw-lighter text-danger mb-3 text-center">
                    {`${currentDate.getMonth()+1}/${currentDate.getDate()}/${currentDate.getFullYear()}`}
                    </div>
                </div>
            }
            <div className="col-auto ms-4">{message.userName}: </div>
            <div className="col text-light bg-info me-1 ms-1 p-1 ps-2 pe-3 shadow border border-dark rounded">
                {message.text}
            </div>
            <div
                className="col-auto fw-lighter"
                style={{ letterSpacing: ".15rem" }}
            >
                {currentDate.toLocaleTimeString()}
            </div>
        </div>
    )
}

export default Message;