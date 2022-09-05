import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListHeader, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';


import { tech } from '../../constants/constants';

const Technologies = () =>  (
  <Section id="tech">
	<SectionDivider />
	<br />
	<SectionTitle>Skills</SectionTitle>
	{/* <SectionText>I've worked with a range of technologies.</SectionText> */}
	{/* <List>
		<ListItem>
			<DiReact size="3rem" />
			<ListContainer>
				<ListTitle>Front-end</ListTitle>
				<ListParagraph>
					Experience with <br />
					React.js
				</ListParagraph>
			</ListContainer>
		</ListItem>
		<ListItem>
			<DiFirebase size="3rem" />
			<ListContainer>
				<ListTitle>Back-end</ListTitle>
				<ListParagraph>
					Experience with <br />
					Node and Databases
				</ListParagraph>
			</ListContainer>
		</ListItem>
		<ListItem>
			<DiZend size="3rem" />
			<ListContainer>
				<ListTitle>UI/UX</ListTitle>
				<ListParagraph>
					Experience with <br />
					Figma
				</ListParagraph>
			</ListContainer>
		</ListItem>
	</List> */}
	
	<List>
		{tech.map(({ title, content, icon }) => (
			<ListItem>
				<ListContainer>
					{/* <Icon icon={icon}></Icon> */}
					<ListTitle>{title}</ListTitle>
					<ListHeader>Experience with:</ListHeader>
					<ListParagraph>{content}</ListParagraph>
				</ListContainer>
			</ListItem>
		))}
	</List>
  </Section>
);

export default Technologies;
