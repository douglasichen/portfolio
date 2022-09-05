import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

import { accom } from '../../constants/constants';

const Acomplishments = () => (
  <Section>
	<SectionTitle>Accomplishments</SectionTitle>
	<Boxes>
		{accom.map((card, index) => (
			<Box key={index}>
				<BoxNum>{card.title}</BoxNum>
				<BoxText>{card.text}</BoxText>
			</Box>
		))}
	</Boxes>
  </Section>
);

export default Acomplishments;
