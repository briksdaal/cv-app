import { Component } from 'react';
import Header from './Header';
import Section from './Section';
import Details from './Details';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Skills from './Skills';
import Management from './Management';
import { defaultData } from './defaultData';
import './CV.css';

export default class CV extends Component {
  constructor(props) {
    super(props);
    this.state = defaultData;

    this.updateState = this.updateState.bind(this);
  }

  updateState(newState) {
    this.setState(newState);
  }

  render() {
    return (
      <>
        <div className="cv-container">
          <Header data={this.state} updateState={this.updateState} />
          <div className="column-container">
            <div className="left-column">
              <Section title="Personal Information">
                <Details data={this.state} updateState={this.updateState} />
              </Section>
              <Section title="About Me">
                <AboutMe data={this.state} updateState={this.updateState} />
              </Section>
              <Section title="Skills">
                <Skills data={this.state} updateState={this.updateState} />
              </Section>
            </div>
            <div className="right-column">
              <Section title="Professional Experience">
                <Experience data={this.state} updateState={this.updateState} />
              </Section>
              <Section title="Education">
                <Experience data={this.state} updateState={this.updateState} />
              </Section>
            </div>
          </div>
          <div className="bottom-bar" />
        </div>
        <div className="management-container">
          <Management
            update={(newState) => this.setState(newState)}
            getCVObj={() => this.state}
          />
        </div>
      </>
    );
  }
}
