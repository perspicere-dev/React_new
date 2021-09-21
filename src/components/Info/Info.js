import React from 'react';
import Container from '../Container/Container';
import { infoContent } from '../../data/dataStore';
import Hero from '../Hero/Hero';

const Info = () => (
  <Container>
    <Hero titleText={infoContent.title} image={infoContent.image}/>
    <p>{infoContent.text}</p>  
  </Container>
);

export default Info;