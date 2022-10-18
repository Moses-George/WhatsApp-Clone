import { FilterList } from "@mui/icons-material";
import SidebarHeader from "./SidebarHeader";
import SidebarForm from './SidebarForm';
import './Sidebar.css';
import Rooms from "./Rooms/Rooms";

const Sidebar = () => {

    return (
        <div className='sidebar'>
            <SidebarHeader />
            <div className='sidebar__search'>
                <SidebarForm />
                <FilterList />
            </div>
            <Rooms />
        </div>

    )
}

export default Sidebar;