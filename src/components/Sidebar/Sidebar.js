
import { FilterList } from "@mui/icons-material";

import SidebarHeader from "./SidebarHeader";
import SidebarForm from './SidebarForm';

import './Sidebar.css';

const Sidebar = () => {

    return (
        <div className='sidebar'>
            <SidebarHeader />
            <div className='sidebar__search'>
                <SidebarForm />
                <FilterList />
            </div>
        </div>

    )
}

export default Sidebar;