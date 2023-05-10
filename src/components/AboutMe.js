import { Component } from 'react';
import EditableContent from './EditableContent';

export default class AboutMe extends Component {
  render() {
    const { aboutMe, updateAboutMe, changeCurrentEdits } = this.props;
    return (
      <p>
        <EditableContent
          text={aboutMe}
          handleGlobalStateUpdate={(newChild) => updateAboutMe(newChild)}
          changeCurrentEdits={changeCurrentEdits}
        />
      </p>
    );
  }
}
