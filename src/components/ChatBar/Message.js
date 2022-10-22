import { Typography } from '@mui/material';
import './Message.css';

const Message = ({ content, timestamp }) => {

    return (
        <div className="message">
            <Typography variant='p' sx={{ fontWeight: 'bold' }} >name</Typography>
            <div className='message__content'>
                <Typography variant='p' sx={{ lineHeight: "1.4" }}>{content}</Typography>
                <Typography variant='span' sx={{ alignSelf: "flex-end", color: "#b4b4b4" }} >{timestamp}</Typography>
            </div>
        </div>
    )
}

export default Message;