import { Component } from 'react';
import EditableContent from './EditableContent';

export default class AboutMe extends Component {
  render() {
    const {
      aboutMe, updateAboutMe, changeCurrentEdits,
    } = this.props;
    return (
      <EditableContent
        text={aboutMe}
        className="about-me"
        textarea
        handleGlobalStateUpdate={(newChild) => updateAboutMe(newChild)}
        changeCurrentEdits={changeCurrentEdits}
      >
        <p>
          {aboutMe}
        </p>
      </EditableContent>
    );
  }
}
