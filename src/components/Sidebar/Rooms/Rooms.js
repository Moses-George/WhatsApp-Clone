import React, { useEffect, useState } from "react";
import { db } from '../../../firebase';
import { addDoc, collection, Timestamp,  onSnapshot } from "firebase/firestore";
import './Rooms.css';
import NewRoom from "./NewRoom";
import useScroll from "../../../hooks/useScroll";

const Rooms = () => {

    const [rooms, setRooms] = useState([]);
    const {isScrolling, handleMouseOver, handleMouseOut} = useScroll()

    const colors = ["pink", "lawngreen", "cyan", "orange", "purple", "gray", "blue", "green", "yellow", "crimson"];

    const handleSubmit = async () => {
        const roomName = prompt("Add a room");

        if (roomName.trim().length === 0) {
            alert("Enter a valid room name!");
        } else {
            try {
                await addDoc(collection(db, 'rooms'), {
                    roomName: roomName,
                    avatarBgColor: colors[Math.floor(Math.random() * colors.length)],
                    created: Timestamp.now()
                });
            } catch (err) {
                alert(err);
            }
        }
    }

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'rooms'), (querySnapshot) => {
            setRooms(querySnapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })));
        });
        return () => unsubscribe();
    }, []);


    return (
        <div className="sidebar__rooms">
            <div className="add__new__room">
                <button onClick={handleSubmit}>Add new chat</button>
            </div>
            <div className={`rooms scroller ${isScrolling && "scroll"}`}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut} >
                {rooms.map(room => <NewRoom
                    key={room.id}
                    id={room.id}
                    name={room.data.roomName}
                    avatarBgColor={room.data.avatarBgColor}
                    createdAt={room.data.created.seconds} />)}
            </div>
        </div>
    )
}

export default Rooms;