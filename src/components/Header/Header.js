import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { links, contact } from '../../constants/constants';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
	<Container>
		<Div1>
			<Link href="/">
				<a style={{ display : "flex", alignItems: "center", color: 'white', marginBottom: '20px'}}>
					<DiCssdeck size="3rem" /> <Span>My Portfolio</Span>
				</a>
			</Link>
		</Div1>
		<Div2>
			<li>
				<Link href="#projects">
					<NavLink>Projects</NavLink>
				</Link>
			</li>
			<li>
				<Link href="#tech">
					<NavLink>Skills</NavLink>
				</Link>
			</li>
			<li>
				<Link href="#about">
					<NavLink>Timeline</NavLink>
				</Link>
			</li>
		</Div2>
		<Div3>
			<SocialIcons href={contact.github.link}>
				<AiFillGithub size="3rem"/>
			</SocialIcons>
			<SocialIcons href={contact.linkedin.link}>
				<AiFillLinkedin size="3rem"/>
			</SocialIcons>
			<SocialIcons href={contact.instagram.link}>
				<AiFillInstagram size="3rem"/>
			</SocialIcons>
		</Div3>
	</Container>
);

export default Header;
