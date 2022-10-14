import React, { useEffect, useState, useCallback } from "react";
import { db } from '../../../firebase';
import { addDoc, collection, Timestamp, query, orderBy, getDocs } from "firebase/firestore";
import './Rooms.css';
import NewRoom from "./NewRoom";

const Rooms = () => {

    const [rooms, setRooms] = useState([]);
    const [isScrolling, setIsScrolling] = useState(false);

    const handleSubmit = async () => {
        const roomName = prompt("Add a room");

        if (roomName.trim().length === 0) {
            alert("Enter a valid room name!");
        } else {
            try {
                await addDoc(collection(db, 'rooms'), {
                    roomName: roomName,
                    created: Timestamp.now()
                });
            } catch (err) {
                alert(err);
            }
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const q = query(collection(db, 'rooms'), orderBy('created', 'desc'));
            const querySnapshot = await getDocs(q);

            setRooms(querySnapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })));
        }
        fetchData();
    }, [])

    const handleMouseOver = useCallback(() => {
        setIsScrolling(true);
    }, []);

    const handleMouseOut = useCallback(() => {
        setIsScrolling(false);
    }, []);

    return (
        <div className="sidebar__rooms">
            <div className="add__new__room">
                <button onClick={handleSubmit}>Add new chat</button>
            </div>
            <div className={`rooms ${isScrolling && "scroll"}`}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut} >
                {rooms.map(room => <NewRoom
                    key={room.id}
                    id={room.id}
                    name={room.data.roomName}
                    createdAt={room.data.created.seconds} />)}
            </div>
        </div>
    )
}

export default Rooms;