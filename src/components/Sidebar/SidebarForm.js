import { Search } from "@mui/icons-material";
import { TextField } from "@mui/material";
import '@fontsource/roboto';
import './SidebarForm.css';

const SidebarForm = () => {

    return (
        <form className='sidebar__form'>
            <Search />
            <TextField
                sx={{ width: '100%' }}
                id="standard-basics"
                placeholder="Search or start a new chat"
                variant="standard"
            />
        </form>
    )
}

export default SidebarForm;