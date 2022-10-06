import { SentimentSatisfied, AttachFile, KeyboardVoice } from "@mui/icons-material";
import { TextField } from "@mui/material";
import './ChatBarFooter.css';

const ChatBarFooter = () => {
    return (
        <footer className="chatBar__footer">
            <div className="chatBar__footer__icon-left">
                <SentimentSatisfied />
                <AttachFile />
            </div>
            <form className="chatBar__form">
                <TextField
                    placeholder="Type a message"
                    sx={{ backgroundColor: "#fff", width: "100%" }} />
            </form>
            <KeyboardVoice />
        </footer>
    )
}

export default ChatBarFooter;