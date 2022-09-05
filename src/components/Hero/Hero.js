import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

import { hero } from '../../constants/constants'

const Hero = (props) => (
  <Section row nopadding>
	<LeftSection>
		<SectionTitle main centre>{hero.title}</SectionTitle>
		<SectionText>{hero.description}</SectionText>
		{/* <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button> */}
	</LeftSection>
  </Section>
);

export default Hero;