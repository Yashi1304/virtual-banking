import React from 'react';
import { FaYoutube,FaInstagram,FaFacebook,FaTwitter } from 'react-icons/fa';
import {FooterContainer,SocialMedia,SocialMediaWrap,SocialLogo,SocialIcons,SocialIconLink,WebsiteRights, FooterWrap, FooterLinksContainer,FooterLinksWrapper,FooterLinkItems,FooterLinkTitle,FooterLink} from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> About Us </FooterLinkTitle>
                                
                                <FooterLink to="/signup">How it works</FooterLink>
                                <FooterLink to="/signup">Testimonials</FooterLink>
                                <FooterLink to="/signup">Careers</FooterLink>
                                <FooterLink to="/signup">Investors</FooterLink>
                                <FooterLink to="/signup">Terms of Service</FooterLink>
                                
                            
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Contact Us </FooterLinkTitle>
                                
                                <FooterLink to="/signup">Contact</FooterLink>
                                <FooterLink to="/signup">Support</FooterLink>
                                <FooterLink to="/signup">Destinations</FooterLink>
                                <FooterLink to="/signup">Sponsorships</FooterLink>
                                
                            
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Videos </FooterLinkTitle>
                                
                                <FooterLink to="/signup">Submit Videos</FooterLink>
                                <FooterLink to="/signup">Ambassadors</FooterLink>
                                <FooterLink to="/signup">Agency</FooterLink>
                                <FooterLink to="/signup">Influencer</FooterLink>
                                
                            
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Social Media </FooterLinkTitle>
                                
                                <FooterLink to="/signup">Instagram</FooterLink>
                                <FooterLink to="/signup">Facebook</FooterLink>
                                <FooterLink to="/signup">Youtube</FooterLink>
                                <FooterLink to="/signup">Twitter</FooterLink>
                                
                            
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                   
                </FooterLinksContainer>
            </FooterWrap>
            
        </FooterContainer>
    )
}

export default Footer;
