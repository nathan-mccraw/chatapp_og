import FriendsSideBar from "./FriendsSideBar";
import ChatInput from "./ChatInput.js";
import ChatWindow from "./ChatWindow";
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
    const [messageArray, setMessageArray] = useState("");
    const [otherUsersArray, setOtherUsersArray] = useState("");
    const [chatMessage, setChatMessage] = useState("");
    const [user, setUser] = useState({
        userId: "2",
        userName: "Nate McCraw",
        password: "nate",
        firstName: "Nathan",
        lastName: "McCraw",
        birthday: "01/14/1987",
        DateCreated: "08/07/2021",
    });

    useEffect(() => {
        axios.get("/api/users").then((response) => {
            setOtherUsersArray(response.data);
        });

        axios.get("/api/messages").then((response) => {
            setMessageArray(response.data);
        });
    });

    const submitMessage = () => {
        const message = {
            messageId: Math.floor(Math.random() * 1000),
            userId: user.userId,
            userName: user.userName,
            content: chatMessage,
            dateCreated: "08/08/2021",
            timeCreated: "1:01 AM",
        };
        setMessageArray(() => [...messageArray, message]);
        console.log(messageArray);
    };

    return (
        <div className="App container-fluid vh-100">
            <div className="row vh-100">
                <div className="col-md-auto p-0">
                    <FriendsSideBar otherUsersArray={otherUsersArray} />
                </div>
                <div className="col vh-100 p-0">
                    <div className="row overflow-auto m-0 h-75">
                        <ChatWindow messageArray={messageArray} />
                    </div>
                    <div className="row m-0 h-25">
                        <ChatInput
                            submitMessage={submitMessage}
                            chatMessage={chatMessage}
                            setChatMessage={setChatMessage}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;