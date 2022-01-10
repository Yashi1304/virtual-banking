import React from 'react';
import { SidebarLink } from './SidebarElements';
import {SidebarContainer,Icon,CloseIcon,SidebarWrapper,SidebarMenu,SideBtnWrap,SidebarRoute} from './SidebarElements';

const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen = {isOpen} onClick={toggle}>
<Icon onClick = {toggle}>
    <CloseIcon />
</Icon >
<SidebarWrapper>
    <SidebarMenu>
        <SidebarLink to = "about"onClick = {toggle}>
          About
        </SidebarLink>
        <SidebarLink to = "discover"onClick = {toggle}>
          Discover
        </SidebarLink>
        <SidebarLink to = "services"onClick = {toggle}>
          Services
        </SidebarLink>
        <SidebarLink to = "login"onClick = {toggle}>
          Login
        </SidebarLink>
    </SidebarMenu>
    <SideBtnWrap>
        <SidebarRoute to ='/signup'>Sign Up</SidebarRoute>
    </SideBtnWrap>
</SidebarWrapper>

        </SidebarContainer>
    )
}

export default Sidebar;
