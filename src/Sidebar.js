import "./Sidebar.css";
import React from 'react';
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleIcon from '@material-ui/icons/People'; 
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'; 
import ChatIcon from '@material-ui/icons/Chat'; 
import StorefrontIcon from '@material-ui/icons/Storefront'; 
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'; 
import {ExpandMoreOutlined} from '@material-ui/icons';
import {useStateValue} from "./StateProvider"; 

function Sidebar() {
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName}/>
            <SidebarRow Icon={LocalHospitalIcon} title="Covid-19 Information Center"/>
            <SidebarRow Icon={PeopleIcon} title="Friends"/>
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
            <SidebarRow Icon={ChatIcon} title="Messenger"/>
            <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
            <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
            <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace"/>
        </div>
    )
}

export default Sidebar
