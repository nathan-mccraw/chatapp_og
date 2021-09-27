import FriendsSideBar from "./FriendsSideBar";
import ChatInput from "./ChatInput.js";
import ChatWindow from "./ChatWindow";
import Footer from "./Footer";
import React from "react";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import TitleBar from "./TitleBar";
import * as signalR from '@microsoft/signalr';

const App = () => {
    const [connection, setConnection] = useState(null);
    const [messageArray, setMessageArray] = useState("");
    const [otherUsersArray, setOtherUsersArray] = useState("");
    const [chatMessage, setChatMessage] = useState("");
    const [modalStates, setModalStates] = useState({
        isSignInOpen: true,
        isRegisterOpen: false,
        showSignInModal: function () { setModalStates({ ...modalStates, isSignInOpen: true, isRegisterOpen: false }) },
        hideSignInModal: function () { setModalStates({ ...modalStates, isSignInOpen: false, isRegisterOpen: false }) },
        showRegisterModal: function () { setModalStates({ ...modalStates, isSignInOpen: false, isRegisterOpen: true }) },
        hideRegisterModal: function () { setModalStates({ ...modalStates, isSignInOpen: false, isRegisterOpen: false }) },
    });
    const [formState, setFormState] = useState({
        userName: "",
        userPassword: "",
        newUser: false,
    });
    const [user, setUser] = useState({
        userId: "1",
        userName: "mobellO",
        firstName: "Millisent",
        lastName: "Obell",
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
                    });
                })
                .catch(e => console.log(e));
        }
    }, [connection]);

    const formChange = (e) => {
        if (e.target.type === 'checkbox') {
            setFormState({ ...formState, [e.target.name]: e.target.checked });
        } else {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    const submitMessage = async (e) => {
        e.preventDefault();
        const message = {
            text: chatMessage,
            user: user,
            dateCreated: new Date(),
        };

        console.log("message:");
        console.log(message);

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

    const signIn = (e) => {
        e.preventDefault();
        console.log("Sign In");
        console.log(formState);
    };

    const registerNewUser = (e) => {
        e.preventDefault();
        console.log("Register New User");
        console.log(formState);
    };

    return (
        <div className="App container-fluid vh-100">
            <div className="row vh-100">
                <div className="col-md-auto p-0">
                    <FriendsSideBar otherUsersArray={otherUsersArray} />
                </div>
                <div className="col vh-100 p-0">
                    <div className="col overflow-auto m-0 h-75">
                        <TitleBar />
                        <ChatWindow messageArray={messageArray} />
                    </div>
                    <div className="row m-0 h-25">
                        <ChatInput
                            submitMessage={submitMessage}
                            chatMessage={chatMessage}
                            setChatMessage={setChatMessage}
                        />
                        <Footer
                            user={user}
                            signIn={signIn}
                            registerNewUser={registerNewUser}
                            modalStates={modalStates}
                            formState={formState}
                            formChange={formChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;