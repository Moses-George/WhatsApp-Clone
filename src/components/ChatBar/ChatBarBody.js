import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { onSnapshot, orderBy, collection } from 'firebase/firestore';
import { db } from '../../firebase';
import useScroll from '../../hooks/useScroll';
import './ChatBarBody.css';
import Message from './Message';

const ChatBarBody = () => {

    const [messages, setMessages] = useState([]);

    const { roomId } = useParams();

    const {isScrolling, handleMouseOver, handleMouseOut} = useScroll();

    useEffect(() => {
        onSnapshot(collection(db, 'rooms', roomId, 'messages'), orderBy('timestamp', 'asc'), (Snapshot) => {
            setMessages(Snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        });
    }, [roomId])

    return (
        <div className={`chatBar__body scroller ${isScrolling && "scroll"}`}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}>
            <div className='messages'>
                {messages.map(message => (
                    <Message key={message.id} content={message.data.message}
                        timestamp={new Date(message.data.timestamp?.toDate()).toUTCString()} />
                ))}
            </div>
        </div>
    )
}

export default ChatBarBody;