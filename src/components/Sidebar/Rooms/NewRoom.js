import React from "react";
import './NewRoom.css';
// import '@fontsource/roboto';

const NewRoom = ({name, createdAt, avatarBgColor}) => {

    const profileName = name.split(" ").map(roomName=> roomName[0]).join('');

    const day = new Date(createdAt * 1000).getDay();
    const month = new Date(createdAt * 1000).getMonth();
    const year = new Date(createdAt * 1000).getFullYear();

    return (
        <div className="new__room">
            <div className="new__room__avatar" style={{backgroundColor: avatarBgColor}} >
                <p>{profileName}</p>
            </div>
            <div className="new__room__chat">
                <h4>{name}</h4>
                <p>{year}-{month}-{day}</p>
            </div>
        </div>
    )
}

export default NewRoom;