import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { ContactDropDown, SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

import { contact } from '../../constants/constants';

const Footer = () => {
  return (
    <FooterWrapper>
		<LinkList>
			<LinkColumn>
				<LinkTitle>{contact.phone.title}</LinkTitle>
				<LinkItem href={'tel:' + contact.phone.number}>{contact.phone.number}</LinkItem>
			</LinkColumn>
			<LinkColumn>
				<LinkTitle>{contact.email.title}</LinkTitle>
				<LinkItem href={'mailto:' + contact.email.emails[0]}>{contact.email.emails[0]}</LinkItem>
			</LinkColumn>
			<LinkColumn>
				<LinkTitle>{contact.discord.title}</LinkTitle>
				<LinkItem href={contact.discord.link}>{contact.discord.username}</LinkItem>
			</LinkColumn>
		</LinkList>
		<SocialIconsContainer>
			<CompanyContainer>
				{/* <Slogan>Innovating one project at a time</Slogan> */}
			</CompanyContainer>
			<SocialContainer>
				<SocialIcons href={contact.github.link}>
					<AiFillGithub size="3rem"/>
				</SocialIcons>
				<SocialIcons href={contact.linkedin.link}>
					<AiFillLinkedin size="3rem"/>
				</SocialIcons>
				<SocialIcons href={contact.instagram.link}>
					<AiFillInstagram size="3rem"/>
				</SocialIcons>
			</SocialContainer>
		</SocialIconsContainer>
	</FooterWrapper>
  );
};

export default Footer;
