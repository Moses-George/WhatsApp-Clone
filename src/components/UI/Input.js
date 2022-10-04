import { Search } from "@mui/icons-material";
import { TextField } from "@mui/material";
import '@fontsource/roboto';

import classes from '../../styles/Input.module.css';

const Input = () => {

    return (
        <div className={classes.searchBar}>
            <Search />
            <TextField
                sx={{ width: '65%' }}
                id="standard-basics"
                placeholder="Search or start a new chat"
                variant="standard"
            />
        </div>
    )
}

export default Input;