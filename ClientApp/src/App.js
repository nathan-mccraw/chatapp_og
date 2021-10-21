import React from "react";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import * as signalR from '@microsoft/signalr';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";
import FriendsSideBar from "./components/FriendsSideBar";
import ChatInput from "./components/ChatInput.js";
import ChatWindow from "./components/ChatWindow";
import Footer from "./components/Footer";
import TitleBar from "./components/TitleBar";
import SignIn from "./components/SignIn";

const App = () => {
    const [connection, setConnection] = useState(null);
    const [messageArray, setMessageArray] = useState("");
    const [otherUsersArray, setOtherUsersArray] = useState("");
    const [chatMessage, setChatMessage] = useState("");
    const [user, setUser] = useState({
        userId: "1",
        username: "Guest",
        firstName: "Guest",
        lastName: "Guest",
        DateCreated: "2021-09-24T00:28:21",
    });
    const latestChat = useRef(null);
    latestChat.current = messageArray;

    useEffect(() => {
        const newConnection = new signalR.HubConnectionBuilder().withUrl("/chathub").withAutomaticReconnect().build();
        setConnection(newConnection);
        axios.get("/api/users").then((response) => {
            setOtherUsersArray(response.data);
        });

        axios.get("/api/messages").then((response) => {
            setMessageArray(response.data);
        });

        //setTimeout(updateScroll, 1000);
    }, []);

    useEffect(() => {
        if (connection) {
            connection.start()
                .then(result => {
                    console.log('Good Connection');
                    connection.on('ReceiveMessage', (message) => {
                        console.log("receiving message");
                        const updatedChat = [...latestChat.current];
                        updatedChat.push(message);
                        setMessageArray(updatedChat);
                       // setTimeout(updateScroll, 500);
                    });
                })
                .catch(e => console.log(e));
        }
    }, [connection]);

    const submitMessage = async (e) => {
        e.preventDefault();
        const message = {
            text: chatMessage,
            user: user,
        };

        if (connection.connectionStarted) {
            try {
                axios.post("/api/messages", message);
                console.log("message sent");
            } catch (error) {
                console.log(error);
            }
        } else {
            console.log('No connection to server');
        }
        setChatMessage("");
    };

    const updateScroll = () => {
        const chatRoomElement = document.getElementById('chatRoom');
        chatRoomElement.scrollTop = chatRoomElement.scrollHeight;
    }

    return (
        //<SignIn />
        //<Router>
            <div className="App container-fluid">
                <div className="row">
                    <FriendsSideBar otherUsersArray={otherUsersArray} />
                    <div id="chatWindowContainer" className="col p-0">
                        <div id="chatWindow" className="col m-0">
                            <TitleBar />
                            <ChatWindow messageArray={messageArray} />
                        </div>
                        <div className="row m-0">
                            <ChatInput
                                submitMessage={submitMessage}
                                chatMessage={chatMessage}
                                setChatMessage={setChatMessage}
                            />
                            <Footer
                                user={user}
                                setUser={setUser}
                            />
                        </div>
                    </div>
                </div>
            </div>
        //</Router>
    );
};

export default App;