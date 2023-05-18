import { useState } from 'react';
import EditableContent from './EditableContent';
import ActionButton from './ActionButton';
import { handleLiUpdates, handleLiRemove } from './helpers/helperFunctions';
import './styles/SingleExperience.css';

export default function SingleExperience({
  exp,
  experiences,
  updateExperiences,
  getNextId,
  changeCurrentEdits,
}) {
  const [expEdits, setExpEdits] = useState(0);
  const [toBeRemoved, setToBeRemoved] = useState(false);

  function handleHoverOnTrash() {
    setToBeRemoved(true);
  }

  function handleHoverOffTrash() {
    setToBeRemoved(false);
  }

  function handleExpRemove() {
    changeCurrentEdits(-expEdits);
    handleLiRemove(exp.key, experiences, updateExperiences);
  }

  function handleAddPoint() {
    const newPoint = {
      key: getNextId(),
      text: 'New point',
    };

    handleLiUpdates(
      exp.key,
      experiences,
      [...exp.points, newPoint],
      'points',
      updateExperiences,
    );
  }

  function changeExperienceEdits(dx) {
    setExpEdits(expEdits + dx);
  }

  const classArray = ['single-experience'];

  if (toBeRemoved) {
    classArray.push('to-be-removed');
  }

  return (
    <div className={classArray.join(' ')}>
      <EditableContent
        text={exp.title}
        className="exp-title"
        handleGlobalStateUpdate={(newChild) => handleLiUpdates(exp.key, experiences, newChild, 'title', updateExperiences)}
        changeCurrentEdits={changeCurrentEdits}
        changeExperienceEdits={changeExperienceEdits}
      >
        <h4>
          {exp.title}
        </h4>
      </EditableContent>
      <EditableContent
        text={exp.subtitle}
        className="exp-subtitle"
        handleGlobalStateUpdate={(newChild) => handleLiUpdates(exp.key, experiences, newChild, 'subtitle', updateExperiences)}
        changeCurrentEdits={changeCurrentEdits}
        changeExperienceEdits={changeExperienceEdits}
      >
        <h5>
          {exp.subtitle}
        </h5>
      </EditableContent>
      <div className="exp-from-to">
        <EditableContent
          text={exp.from}
          className="exp-from"
          handleGlobalStateUpdate={(newChild) => handleLiUpdates(exp.key, experiences, newChild, 'from', updateExperiences)}
          changeCurrentEdits={changeCurrentEdits}
          changeExperienceEdits={changeExperienceEdits}
        >
          <span>{exp.from}</span>
        </EditableContent>
        {' '}
        -
        {' '}
        <EditableContent
          text={exp.to}
          className="exp-to"
          handleGlobalStateUpdate={(newChild) => handleLiUpdates(exp.key, experiences, newChild, 'to', updateExperiences)}
          changeCurrentEdits={changeCurrentEdits}
          changeExperienceEdits={changeExperienceEdits}
        >
          <span>{exp.to}</span>
        </EditableContent>
      </div>
      <div className="exp-points-container">
        <ul className="exp-points">
          {exp.points.map((point) => (
            <li key={point.key}>
              <EditableContent
                text={point.text}
                textarea
                handleGlobalStateUpdate={
                      (newChild) => handleLiUpdates(
                        point.key,
                        exp.points,
                        newChild,
                        'text',
                        (newLi) => handleLiUpdates(
                          exp.key,
                          experiences,
                          newLi,
                          'points',
                          updateExperiences,
                        ),
                      )
                    }
                handleLiRemove={() => handleLiRemove(
                  point.key,
                  exp.points,
                  (newPoints) => handleLiUpdates(
                    exp.key,
                    experiences,
                    newPoints,
                    'points',
                    updateExperiences,
                  ),
                )}
                changeCurrentEdits={changeCurrentEdits}
                changeExperienceEdits={changeExperienceEdits}
              >
                <span>{point.text}</span>
              </EditableContent>
            </li>
          ))}
          <li>
            <div className="add-point-container">
              <ActionButton
                onClick={handleAddPoint}
                type="add"
              />
            </div>
          </li>
        </ul>
      </div>
      <div
        className="exp-remove-container"
        onMouseEnter={handleHoverOnTrash}
        onMouseLeave={handleHoverOffTrash}
      >
        <ActionButton
          onClick={handleExpRemove}
          type="remove"
        />
      </div>
    </div>
  );
}
