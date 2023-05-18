import EditableContent from './EditableContent';
import ActionButton from './ActionButton';
import { handleLiUpdates, handleLiRemove } from './helpers/helperFunctions';
import './styles/Skills.css';

export default function Skills({
  skills,
  updateSkills,
  getNextId,
  changeCurrentEdits,
}) {
  function handleAddSkill() {
    const newLi = {
      key: getNextId(),
      text: 'New skill',
    };

    updateSkills([...skills, newLi]);
  }

  return (
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
            <span>{skill.text}</span>
          </EditableContent>
        </li>
      ))}
      <li>
        <div className="add-skill-container">
          <ActionButton
            onClick={handleAddSkill}
            type="add"
          />
        </div>
      </li>
    </ul>
  );
}
