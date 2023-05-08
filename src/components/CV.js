import { Component } from 'react';
import Header from './Header';
import Section from './Section';
import Details from './Details';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Skills from './Skills';

export default class CV extends Component {
  render() {
    return (
      <div className="cv-container">
        <Header />
        <Section>
          <Details />
        </Section>
        <Section>
          <AboutMe />
        </Section>
        <Section>
          <Skills />
        </Section>
        <Section>
          <Experience />
        </Section>
        <Section>
          <Experience />
        </Section>
      </div>
    );
  }
}
