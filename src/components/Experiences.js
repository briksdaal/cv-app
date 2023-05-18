import SingleExperience from './SingleExperience';
import ActionButton from './ActionButton';
import './styles/Experiences.css';

export default function Experiences({
  experiences,
  updateExperiences,
  getNextId,
  changeCurrentEdits,
}) {
  function handleAddExp() {
    const newExp = {
      key: getNextId(),
      title: 'Title',
      subtitle: 'Subtitle',
      from: 'From',
      to: 'To',
      points: [],
    };

    updateExperiences([...experiences, newExp]);
  }

  return (
    <ul className="experiences">
      {experiences.map((exp) => (
        <li key={exp.key}>
          <SingleExperience
            exp={exp}
            experiences={experiences}
            updateExperiences={updateExperiences}
            changeCurrentEdits={changeCurrentEdits}
            getNextId={getNextId}
          />
        </li>
      ))}
      <li className="add-exp-container">
        <ActionButton
          onClick={handleAddExp}
          type="add"
        />
      </li>
    </ul>
  );
}
