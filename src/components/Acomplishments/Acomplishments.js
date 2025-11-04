import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 12, text: 'Open Source Projects'},
  { number: 34, text: 'website tasks', },
  { number: 20, text: 'completed tasks', },
  { number: 5, text: 'python and c++ tasks completed', }
];

const Acomplishments = () => (
  <section>
    <SectionTitle>Personal Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </section>
);

export default Acomplishments;
