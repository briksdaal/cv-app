import React, { Component } from 'react';
import uniqid from 'uniqid';
import ReactToPrint, { PrintContextConsumer } from 'react-to-print';
import Header from './Header';
import Section from './Section';
import Details from './Details';
import AboutMe from './AboutMe';
import Experiences from './Experiences';
import Skills from './Skills';
import Management from './Management';
import Footer from './Footer';
import { handleChildUpdates } from './helpers/helperFunctions';
import { defaultDataRaw, dummyDataRaw } from './defaultData';
import './styles/CV.css';

export default class CV extends Component {
  constructor(props) {
    super(props);

    this.ref = React.createRef();

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
    if (loadedData) {
      this.setData(loadedData);
    }
  }

  handleSaveData() {
    const { data } = this.state;
    localStorage.setItem('savedData', JSON.stringify(data));
  }

  static handleClearSavedData() {
    localStorage.clear();
  }

  static getNextId() {
    return uniqid();
  }

  getDataWithKeys(data) {
    return Object.fromEntries(Object.entries(data).map((entry) => {
      let value = entry[1];
      if (Array.isArray(value)) {
        value = value.map((info) => ({
          key: CV.getNextId(),
          ...this.getDataWithKeys({ ...info }),
        }));
      }
      return [entry[0], value];
    }));
  }

  setData(data) {
    this.setState({ data });
  }

  changeCurrentEdits(dx) {
    const { currentEdits } = this.state;
    this.setState({ currentEdits: currentEdits + dx });
  }

  render() {
    const { data, currentEdits } = this.state;
    return (
      <div className="cv-app">
        <div className="cv-container" ref={this.ref}>
          <Header
            header={data.header}
            updateHeader={(newChild) => handleChildUpdates(data, newChild, 'header', this.setData)}
            changeCurrentEdits={this.changeCurrentEdits}
          />
          <div className="column-container">
            <div className="left-column">
              <Section title="Personal Information">
                <Details
                  details={data.details}
                  updateDetails={(newChild) => handleChildUpdates(data, newChild, 'details', this.setData)}
                  changeCurrentEdits={this.changeCurrentEdits}
                />
              </Section>
              <Section title="About Me">
                <AboutMe
                  aboutMe={data.aboutMe}
                  updateAboutMe={(newChild) => handleChildUpdates(data, newChild, 'aboutMe', this.setData)}
                  changeCurrentEdits={this.changeCurrentEdits}
                />
              </Section>
              <Section title="Skills">
                <Skills
                  skills={data.skills}
                  updateSkills={(newChild) => handleChildUpdates(data, newChild, 'skills', this.setData)}
                  changeCurrentEdits={this.changeCurrentEdits}
                  getNextId={CV.getNextId}
                />
              </Section>
            </div>
            <div className="right-column">
              <Section title="Professional Experience">
                <Experiences
                  experiences={data.jobs}
                  updateExperiences={(newChild) => handleChildUpdates(data, newChild, 'jobs', this.setData)}
                  changeCurrentEdits={this.changeCurrentEdits}
                  getNextId={CV.getNextId}
                />
              </Section>
              <Section title="Education">
                <Experiences
                  experiences={data.education}
                  updateExperiences={(newChild) => handleChildUpdates(data, newChild, 'education', this.setData)}
                  changeCurrentEdits={this.changeCurrentEdits}
                  getNextId={CV.getNextId}
                />
              </Section>
            </div>
          </div>
          {/* <div className="bottom-bar" /> */}
        </div>
        <div className="management-container">
          <Management
            currentEdits={currentEdits}
            handleLoadDummyData={this.handleLoadDummyData}
            handleLoadDefaultData={this.handleLoadDefaultData}
            handleLoadSavedData={this.handleLoadSavedData}
            handleSaveData={this.handleSaveData}
            handleClearSavedData={CV.handleClearSavedData}
          />
          <ReactToPrint content={() => this.ref.current}>
            <PrintContextConsumer>
              {({ handlePrint }) => (
                <button
                  disabled={currentEdits !== 0}
                  type="button"
                  onClick={handlePrint}
                >
                  Print CV
                </button>
              )}
            </PrintContextConsumer>
          </ReactToPrint>
          <Footer />
        </div>
      </div>
    );
  }
}
