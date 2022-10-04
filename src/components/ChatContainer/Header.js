import { AccountCircle, Add, DonutLarge, MoreHoriz } from "@mui/icons-material";

import classes from '../../styles/Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.account}>
                <AccountCircle sx={{ fontSize: '50px', color: "#bfbfbf" }} />
            </div>
            <div className={classes['icons-right']} >
                <DonutLarge sx={{color: '#bfbfbf'}} />
                <Add sx={{color: '#bfbfbf'}} />
                <MoreHoriz sx={{color: '#bfbfbf'}} />
            </div>
        </header>
    )
}

export default Header;