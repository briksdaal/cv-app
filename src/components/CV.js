import { Component } from 'react';
import Header from './Header';
import Section from './Section';
import Details from './Details';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Skills from './Skills';
import { dummyData, defaultData } from './defaultData';
import './CV.css';

export default class CV extends Component {
  constructor(props) {
    super(props);
    this.state = defaultData;

    this.handleDummyDataLoad = this.handleDummyDataLoad.bind(this);
    this.handleEmptyDataLoad = this.handleEmptyDataLoad.bind(this);
  }

  handleDummyDataLoad() {
    this.setState(dummyData);
  }

  handleEmptyDataLoad() {
    this.setState(defaultData);
  }

  render() {
    return (
      <>
        <div className="cv-container">
          <Header data={this.state} updateState={(newState) => this.setState(newState)} />
          <div className="column-container">
            <div className="left-column">
              <Section title="Personal Information">
                <Details />
              </Section>
              <Section title="About Me">
                <AboutMe />
              </Section>
              <Section title="Skills">
                <Skills />
              </Section>
            </div>
            <div className="right-column">
              <Section title="Work Experiemce">
                <Experience />
              </Section>
              <Section title="Education">
                <Experience />
              </Section>
            </div>
          </div>
        </div>
        <div className="management-buttons">
          <button type="button" onClick={this.handleDummyDataLoad}>Load dummy</button>
          <button type="button" onClick={this.handleEmptyDataLoad}>Load empty</button>
        </div>
      </>
    );
  }
}
