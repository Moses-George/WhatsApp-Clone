import { useState } from "react";
import { useParams } from "react-router-dom";
import { SentimentSatisfied, AttachFile, KeyboardVoice, Send } from "@mui/icons-material";
import { TextField } from "@mui/material";
import './ChatBarFooter.css';
import { db } from "../../firebase";
import {  collection, addDoc, doc, serverTimestamp} from "firebase/firestore";

const ChatBarFooter = () => {

    const [text, setText] = useState("");

    const { roomId } = useParams();
    const isTyping = !!text;

    const sendMessage = async () => {
        const docRef = doc(db, 'rooms', roomId);
        const colRef = collection(docRef, 'messages');
        await addDoc(colRef, {
            message: text,
            timestamp: serverTimestamp()
        })
        setText("");
    }

    return (
        <footer className="chatBar__footer">
            <div className="chatBar__footer__icon-left">
                <SentimentSatisfied />
                <AttachFile />
            </div>
            <form className="chatBar__form">
                <TextField
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                    placeholder="Type a message"
                    sx={{ backgroundColor: "#fff", width: "100%" }} />
            </form>
            {!isTyping && <KeyboardVoice />}
            {isTyping && <Send onClick = {sendMessage} />}
        </footer>
    )
}

export default ChatBarFooter;