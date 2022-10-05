import { AccountCircle, Add, DonutLarge, MoreHoriz } from "@mui/icons-material";

import './SidebarHeader.css';

const SidebarHeader = () => {

    return (
        <header className='sidebar__header'>
            <div className='account'>
                <AccountCircle sx={{ fontSize: '50px', color: "#bfbfbf" }} />
            </div>
            <div className='icons__right' >
                <DonutLarge sx={{color: '#bfbfbf'}} />
                <Add sx={{color: '#bfbfbf'}} />
                <MoreHoriz sx={{color: '#bfbfbf'}} />
            </div>
        </header>
    )
}

export default SidebarHeader;