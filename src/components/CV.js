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

    this.state = {
      data: this.defaultData,
      currentEdits: 0,
    };

    localStorage.clear();

    this.changeCurrentEdits = this.changeCurrentEdits.bind(this);
    this.handleLoadDummyData = this.handleLoadDummyData.bind(this);
    this.handleLoadDefaultData = this.handleLoadDefaultData.bind(this);
    this.handleSaveData = this.handleSaveData.bind(this);
    this.handleLoadSavedData = this.handleLoadSavedData.bind(this);
    this.handleClearSavedData = this.handleClearSavedData.bind(this);
    this.handleDataUpdates = this.handleDataUpdates.bind(this);
    this.setData = this.setData.bind(this);
    this.changeCurrentEdits = this.changeCurrentEdits.bind(this);
  }

  handleLoadDummyData() {
    this.setData(this.dummyData);
  }

  handleLoadDefaultData() {
    this.setData(this.defaultData);
  }

  handleLoadSavedData() {
    const loadedData = JSON.parse(localStorage.getItem('savedData'));
    if (!loadedData) {
      this.setData(loadedData);
    }
  }

  handleSaveData() {
    localStorage.setItem('savedData', JSON.stringify(this.state));
  }

  handleClearSavedData() {
    localStorage.clear();
  }

  handleDataUpdates(field, newSubDataObj) {
    const { data } = this.state;

    const newData = {
      ...data,
    };
    newData[field] = newSubDataObj;

    this.setData(newData);
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

  setData(data) {
    this.setState({ data });
  }

  changeCurrentEdits(bool) {
    const { currentEdits } = this.state;
    const dx = bool ? 1 : -1;
    this.setState({ currentEdits: currentEdits + dx });
  }

  render() {
    const { data, currentEdits } = this.state;
    return (
      <>
        <div className="cv-container">
          <Header
            header={data.header}
            updateHeader={(newHeader) => this.handleDataUpdates('header', newHeader)}
            changeCurrentEdits={this.changeCurrentEdits}
          />
          <div className="column-container">
            <div className="left-column">
              <Section title="Personal Information">
                {/* <Details details={this.state} updateState={this.updateState} /> */}
              </Section>
              <Section title="About Me">
                {/* <AboutMe data={this.state} updateState={this.updateState} /> */}
              </Section>
              <Section title="Skills">
                {/* <Skills data={this.state} updateState={this.updateState} /> */}
              </Section>
            </div>
            <div className="right-column">
              <Section title="Professional Experience">
                {/* <Experience data={this.state} updateState={this.updateState} type="jobs" /> */}
              </Section>
              <Section title="Education">
                {/* <Experience data={this.state}
                 updateState={this.updateState} type="education" /> */}
              </Section>
            </div>
          </div>
          <div className="bottom-bar" />
        </div>
        <div className="management-container">
          <Management
            currentEdits={currentEdits}
            handleLoadDummyData={this.handleLoadDummyData}
            handleLoadDefaultData={this.handleLoadDefaultData}
            handleLoadSavedData={this.handleLoadSavedData}
            handleSaveData={this.handleSaveData}
            handleClearSavedData={this.handleClearSavedData}
          />
        </div>
      </>
    );
  }
}
