
import { FilterList } from "@mui/icons-material";

import Header from "./Header";
import Input from "../UI/Input";

import classes from '../../styles/ChatContainer.module.css';

const ChatsContainer = () => {

    return (
        <div className={classes['chat-container']}>
            <Header />
            <div className={classes.search}>
                <Input />
                <FilterList />
            </div>
        </div>

    )
}

export default ChatsContainer;