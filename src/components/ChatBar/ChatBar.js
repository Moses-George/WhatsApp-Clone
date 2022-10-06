import './ChatBar.css'
import ChatBarBody from './ChatBarBody';
import ChatBarHeader from './ChatBarHeader';
import ChatBarFooter from './ChatBarFooter';

const ChatBar = () => {

    return (
        <div className='chatBar'>
            <ChatBarHeader />
            <ChatBarBody />
            <ChatBarFooter />
        </div>
    )
}

export default ChatBar;