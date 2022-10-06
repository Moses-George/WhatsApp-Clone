import React from "react";
import './Main.css';
import ChatBar from './ChatBar/ChatBar';
import Sidebar from './Sidebar/Sidebar';

const Main = () => {
    return (
        <main className='main'>
            <Sidebar />
            <ChatBar />
        </main>
    )
}

export default Main;