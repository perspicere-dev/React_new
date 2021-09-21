import React from 'react';
import Container from '../Container/container';
import Hero from '../Hero/Hero';
import {FAQcontent} from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero titleText={FAQcontent.title} image={FAQcontent.image}/>
    <p>{FAQcontent.text}</p>
  </Container>
);

export default FAQ;