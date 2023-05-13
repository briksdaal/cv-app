import { Component } from 'react';
import EditableContent from './EditableContent';
import ActionButton from './ActionButton';
import { handleChildUpdates, handleLiUpdates, handleLiRemove } from './helpers/helperFunctions';

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
        <ul className="skills">
          {skills.map((skill) => (
            <li key={skill.key}>
              <EditableContent
                text={skill.text}
                textarea
                handleGlobalStateUpdate={(newChild) => handleLiUpdates(skill.key, skills, newChild, 'text', updateSkills)}
                handleLiRemove={() => handleLiRemove(skill.key, skills, updateSkills)}
                changeCurrentEdits={changeCurrentEdits}
              >
                {skill.text}
              </EditableContent>
            </li>
          ))}
        </ul>
        <ActionButton
          onClick={this.handleAddSkill}
          type="add"
        />
      </>
    );
  }
}
