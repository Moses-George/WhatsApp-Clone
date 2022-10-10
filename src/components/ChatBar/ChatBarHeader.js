import { AccountCircle, Videocam, Phone, Search, MoreHoriz } from "@mui/icons-material";
import './ChatBarHeader.css'

const ChatBarHeader = () => {

    return (
        <header className="chatBar__header">
            <AccountCircle sx={{ fontSize: '50px', color: "#bfbfbf" }} />
            <div className="chatBar__header__right">
                <div className="chatBar__header__dialogue">
                    <Videocam />
                    <Phone />
                </div>
                <div>
                    <Search />
                    <MoreHoriz />
                </div>
            </div>
        </header>
    )
}

export default ChatBarHeader;