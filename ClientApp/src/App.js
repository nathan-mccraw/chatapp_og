import FriendsSideBar from "./FriendsSideBar";
import ChatInput from "./ChatInput.js";
import ChatWindow from "./ChatWindow";
import React from "react";
import { useState } from "react";

const App = () => {
  const [messageArray, setMessageArray] = useState([
    {
      messageId: "1",
      userId: "4",
      userName: "BK",
      content: "I'm a Pelaton guy so I bike for miles in my livingroom.",
      dateCreated: "08/07/2021",
      timeCreated: "1:15 PM",
    },
    {
      messageId: "2",
      userId: "1",
      userName: "Andy Sterks",
      content: "I am the first one to post on this message board!",
      dateCreated: "08/08/2021",
      timeCreated: "9:52 AM",
    },
    {
      messageId: "3",
      userId: "1",
      userName: "Andy Sterks",
      content:
        "I hope everyone is doing okay, I had a nice day going on a hike with my girlfriend on a new nearby hiking trail.",
      dateCreated: "08/08/2021",
      timeCreated: "10:54 AM",
    },
    {
      messageId: "4",
      userId: "2",
      userName: "Nate McCraw",
      content:
        "That's really cool Andy, I used to love night infils on deployments, typically 7K.  Really quiet, still air, could hear yourself think.",
      dateCreated: "08/08/2021",
      timeCreated: "11:58 AM",
    },
    {
      messageId: "5",
      userId: "3",
      userName: "Jill",
      content:
        "I always liked biking on trails, but I haven't biked in so long; makes me want to get back out there",
      dateCreated: "08/09/2021",
      timeCreated: "1:12 PM",
    },
    {
      messageId: "6",
      userId: "1",
      userName: "Andy Sterks",
      content: "I am the first one to post on this message board!",
      dateCreated: "08/08/2021",
      timeCreated: "9:52 AM",
    },
    {
      messageId: "7",
      userId: "1",
      userName: "Andy Sterks",
      content:
        "I hope everyone is doing okay, I had a nice day going on a hike with my girlfriend on a new nearby hiking trail.",
      dateCreated: "08/08/2021",
      timeCreated: "10:54 AM",
    },
    {
      messageId: "8",
      userId: "2",
      userName: "Nate McCraw",
      content:
        "That's really cool Andy, I used to love night infils on deployments, typically 7K.  Really quiet, still air, could hear yourself think.",
      dateCreated: "08/08/2021",
      timeCreated: "11:58 AM",
    },
    {
      messageId: "9",
      userId: "3",
      userName: "Jill",
      content:
        "I always liked biking on trails, but I haven't biked in so long; makes me want to get back out there",
      dateCreated: "08/09/2021",
      timeCreated: "1:12 PM",
    },
    {
      messageId: "10",
      userId: "4",
      userName: "BK",
      content: "I'm a Pelaton guy so I bike for miles in my livingroom.",
      dateCreated: "08/09/2021",
      timeCreated: "1:15 PM",
    },
    {
      messageId: "11",
      userId: "2",
      userName: "Nate McCraw",
      content:
        "That's really cool Andy, I used to love night infils on deployments, typically 7K.  Really quiet, still air, could hear yourself think.",
      dateCreated: "08/08/2021",
      timeCreated: "11:58 AM",
    },
    {
      messageId: "12",
      userId: "3",
      userName: "Jill",
      content:
        "I always liked biking on trails, but I haven't biked in so long; makes me want to get back out there",
      dateCreated: "08/09/2021",
      timeCreated: "1:12 PM",
    },
    {
      messageId: "13",
      userId: "1",
      userName: "Andy Sterks",
      content: "I am the first one to post on this message board!",
      dateCreated: "08/08/2021",
      timeCreated: "9:52 AM",
    },
    {
      messageId: "14",
      userId: "1",
      userName: "Andy Sterks",
      content:
        "I hope everyone is doing okay, I had a nice day going on a hike with my girlfriend on a new nearby hiking trail.",
      dateCreated: "08/08/2021",
      timeCreated: "10:54 AM",
    },
    {
      messageId: "15",
      userId: "1",
      userName: "Andy Sterks",
      content:
        "I hope everyone is doing okay, I had a nice day going on a hike with my girlfriend on a new nearby hiking trail.",
      dateCreated: "08/08/2021",
      timeCreated: "10:54 AM",
    },
    {
      messageId: "16",
      userId: "2",
      userName: "Nate McCraw",
      content:
        "That's really cool Andy, I used to love night infils on deployments, typically 7K.  Really quiet, still air, could hear yourself think.",
      dateCreated: "08/08/2021",
      timeCreated: "11:58 AM",
    },
    {
      messageId: "17",
      userId: "3",
      userName: "Jill",
      content:
        "I always liked biking on trails, but I haven't biked in so long; makes me want to get back out there",
      dateCreated: "08/09/2021",
      timeCreated: "1:12 PM",
    },
    {
      messageId: "18",
      userId: "4",
      userName: "BK",
      content: "I'm a Pelaton guy so I bike for miles in my livingroom.",
      dateCreated: "08/09/2021",
      timeCreated: "1:15 PM",
    },
    {
      messageId: "19",
      userId: "2",
      userName: "Nate McCraw",
      content:
        "That's really cool Andy, I used to love night infils on deployments, typically 7K.  Really quiet, still air, could hear yourself think.",
      dateCreated: "08/08/2021",
      timeCreated: "11:58 AM",
    },
  ]);
  const [otherUsersArray, setOtherUsersArray] = useState([
    {
      userId: "1",
      userName: "Andy Sterks",
      password: "andy",
      firstName: "Andrew",
      lastName: "Sterkowitz",
      birthday: "11/10/1988",
      dateCreated: "08/07/2021",
    },
    {
      userId: "2",
      userName: "Nate McCraw",
      password: "nate",
      firstName: "Nathan",
      lastName: "McCraw",
      birthday: "01/14/1987",
      dateCreated: "08/07/2021",
    },
    {
      userId: "3",
      userName: "Jill McCraw",
      password: "jill",
      firstName: "Jillian",
      lastName: "McCraw",
      birthday: "01/21/1988",
      dateCreated: "08/07/2021",
    },
    {
      userId: "4",
      userName: "BK",
      password: "brenndan",
      firstName: "Brenndan",
      lastName: "Kennedy",
      birthday: "10/30/1994",
      dateCreated: "08/07/2021",
    },
  ]);
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
