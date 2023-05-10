import { Component } from 'react';
import EditableContent from './EditableContent';
import { handleChildUpdates, handleLiUpdates, handleLiRemove } from './helpers/helperFunctions';
import Li from './Li';

export default class Skills extends Component {
  render() {
    const { skills, updateSkills, changeCurrentEdits } = this.props;
    return (
      <ul>
        {skills.map((skill) => (
          <li key={skill.key}>
            <EditableContent
              text={skill.text}
              handleGlobalStateUpdate={(newChild) => handleLiUpdates(skill.key, skills, newChild, 'text', updateSkills)}
              handleLiRemove={() => handleLiRemove(skill.key, skills, updateSkills)}
              changeCurrentEdits={changeCurrentEdits}
            />
          </li>
        ))}
      </ul>
    );
  }
}
