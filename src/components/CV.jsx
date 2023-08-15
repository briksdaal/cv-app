import { useState, useRef } from 'react';
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
import './styles/CV.css';

export default function CV({
  getNextId,
  defaultData,
  dummyData,
}) {
  const [data, setData] = useState(defaultData);
  const [currentEdits, setCurrentEdits] = useState(0);
  const ref = useRef(null);

  function changeCurrentEdits(dx) {
    setCurrentEdits(currentEdits + dx);
  }

  return (
    <div className="cv-app">
      <div className="cv-container" ref={ref}>
        <Header
          header={data.header}
          updateHeader={(newChild) => handleChildUpdates(data, newChild, 'header', setData)}
          changeCurrentEdits={changeCurrentEdits}
        />
        <div className="column-container">
          <div className="left-column">
            <Section title="Personal Information">
              <Details
                details={data.details}
                updateDetails={(newChild) => handleChildUpdates(data, newChild, 'details', setData)}
                changeCurrentEdits={changeCurrentEdits}
              />
            </Section>
            <Section title="About Me">
              <AboutMe
                aboutMe={data.aboutMe}
                updateAboutMe={(newChild) => handleChildUpdates(data, newChild, 'aboutMe', setData)}
                changeCurrentEdits={changeCurrentEdits}
              />
            </Section>
            <Section title="Skills">
              <Skills
                skills={data.skills}
                updateSkills={(newChild) => handleChildUpdates(data, newChild, 'skills', setData)}
                changeCurrentEdits={changeCurrentEdits}
                getNextId={getNextId}
              />
            </Section>
          </div>
          <div className="right-column">
            <Section title="Professional Experience">
              <Experiences
                experiences={data.jobs}
                updateExperiences={(newChild) => handleChildUpdates(data, newChild, 'jobs', setData)}
                changeCurrentEdits={changeCurrentEdits}
                getNextId={getNextId}
              />
            </Section>
            <Section title="Education">
              <Experiences
                experiences={data.education}
                updateExperiences={(newChild) => handleChildUpdates(data, newChild, 'education', setData)}
                changeCurrentEdits={changeCurrentEdits}
                getNextId={getNextId}
              />
            </Section>
          </div>
        </div>
      </div>
      <div className="management-container">
        <Management
          data={data}
          setData={setData}
          defaultData={defaultData}
          dummyData={dummyData}
          currentEdits={currentEdits}
        />
        <ReactToPrint content={() => ref.current}>
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
