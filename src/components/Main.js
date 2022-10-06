import React from "react";
import './Main.css';
import Chat from './Chat/Chat';
import Sidebar from './Sidebar/Sidebar';

const Main = () => {
    return (
        <main className='main'>
            <Sidebar />
            <Chat />
        </main>
    )
}

export default Main;