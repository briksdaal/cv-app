import { Component } from 'react';
import uniqid from 'uniqid';
import Header from './Header';
import Section from './Section';
import Details from './Details';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Skills from './Skills';
import Management from './Management';
import { defaultDataRaw, dummyDataRaw } from './defaultData';
import './CV.css';

export default class CV extends Component {
  constructor(props) {
    super(props);

    this.defaultData = this.getDataWithKeys(defaultDataRaw);
    this.dummyData = this.getDataWithKeys(dummyDataRaw);

    this.state = this.defaultData;

    localStorage.clear();

    this.updateState = this.updateState.bind(this);
  }

  getDataWithKeys(data) {
    return Object.fromEntries(Object.entries(data).map((entry) => {
      let value = entry[1];
      if (Array.isArray(value)) {
        value = value.map((info) => ({
          key: uniqid(),
          ...this.getDataWithKeys({ ...info }),
        }));
      }
      return [entry[0], value];
    }));
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
            defaultData={this.defaultData}
            dummyData={this.dummyData}
            update={(newState) => this.setState(newState)}
            getCVObj={() => this.state}
          />
        </div>
      </>
    );
  }
}
