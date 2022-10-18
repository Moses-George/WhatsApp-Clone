import { useParams } from 'react-router-dom';
import './ChatBarBody.css';

const ChatBarBody = () => {

    const { roomId } = useParams();
    console.log(roomId)

    return <div className="chatBar__body"></div>
}

export default ChatBarBody;