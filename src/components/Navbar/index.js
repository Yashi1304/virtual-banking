import React from 'react';
import {Nav,NavbarContainer,NavLogo,NavBtn, NavBtnLink,MobileIcon,NavMenu,NavItem,NavLinks} from './NavbarElements';
import {FaBars} from 'react-icons/fa'
const Navbar = ({toggle}) => {
    return (
       <>

<Nav>
    <NavbarContainer>
        <NavLogo to = '/'>
           dolla 
        </NavLogo>
        <MobileIcon onClick = {toggle}>
            <FaBars/>
        </MobileIcon>
        <NavMenu>
            <NavItem>
                <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to="discover">Discover</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to="services">Services</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to="login">Login</NavLinks>
            </NavItem>
        </NavMenu>
       <NavBtn>
           <NavBtnLink to = '/signup'>Sign Up</NavBtnLink>
           </NavBtn> 
    </NavbarContainer>
</Nav>
       </>
    );
};

export default Navbar;
