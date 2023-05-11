import { Component } from 'react';
import EditableContent from './EditableContent';
import { handleChildUpdates, handleLiUpdates, handleLiRemove } from './helpers/helperFunctions';
import Li from './Li';

export default class Skills extends Component {
  constructor(props) {
    super(props);
    this.handleAddSkill = this.handleAddSkill.bind(this);
  }

  handleAddSkill() {
    const { skills, updateSkills, getNextId } = this.props;
    const newLi = {
      key: getNextId(),
      text: 'New skill',
    };

    updateSkills([...skills, newLi]);
  }

  render() {
    const { skills, updateSkills, changeCurrentEdits } = this.props;
    return (
      <>
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
        <button type="button" onClick={this.handleAddSkill}>Add skill</button>
      </>
    );
  }
}
