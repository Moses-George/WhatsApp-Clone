import React from "react";

import classes from '../styles/Main.module.css';

import Chat from './Chat/Chat';

import ChatsContainer from "./ChatContainer/ChatsContainer";

const Main = () => {
    return (
        <main className={classes.main}>
            <ChatsContainer />
            <Chat />
        </main>
    )
}

export default Main;