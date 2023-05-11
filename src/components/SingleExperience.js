import { Component } from 'react';
import EditableContent from './EditableContent';
import { handleLiUpdates, handleLiRemove } from './helpers/helperFunctions';

export default class SingleExperience extends Component {
  constructor(props) {
    super(props);

    this.state = { expEdits: 0 };

    this.handleExpRemove = this.handleExpRemove.bind(this);
    this.handleAddPoint = this.handleAddPoint.bind(this);
    this.changeExperienceEdits = this.changeExperienceEdits.bind(this);
  }

  handleExpRemove() {
    const {
      exp,
      experiences,
      updateExperiences,
      changeCurrentEdits,
    } = this.props;

    const { expEdits } = this.state;

    changeCurrentEdits(-expEdits);
    handleLiRemove(exp.key, experiences, updateExperiences);
  }

  handleAddPoint() {
    const {
      exp,
      experiences,
      updateExperiences,
      getNextId,
    } = this.props;

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

  changeExperienceEdits(dx) {
    const { expEdits } = this.state;
    this.setState({ expEdits: expEdits + dx });
  }

  render() {
    const {
      exp,
      experiences,
      updateExperiences,
      changeCurrentEdits,
    } = this.props;
    return (
      <>
        <h4>
          <EditableContent
            text={exp.title}
            handleGlobalStateUpdate={(newChild) => handleLiUpdates(exp.key, experiences, newChild, 'title', updateExperiences)}
            changeCurrentEdits={changeCurrentEdits}
            changeExperienceEdits={this.changeExperienceEdits}
          />
        </h4>
        <h5>
          <EditableContent
            text={exp.subtitle}
            handleGlobalStateUpdate={(newChild) => handleLiUpdates(exp.key, experiences, newChild, 'subtitle', updateExperiences)}
            changeCurrentEdits={changeCurrentEdits}
            changeExperienceEdits={this.changeExperienceEdits}
          />
        </h5>
        <span>
          <EditableContent
            text={exp.from}
            handleGlobalStateUpdate={(newChild) => handleLiUpdates(exp.key, experiences, newChild, 'from', updateExperiences)}
            changeCurrentEdits={changeCurrentEdits}
            changeExperienceEdits={this.changeExperienceEdits}
          />
          {' '}
          -
          {' '}
          <EditableContent
            text={exp.to}
            handleGlobalStateUpdate={(newChild) => handleLiUpdates(exp.key, experiences, newChild, 'to', updateExperiences)}
            changeCurrentEdits={changeCurrentEdits}
            changeExperienceEdits={this.changeExperienceEdits}
          />
        </span>
        <ul>
          {exp.points.map((point) => (
            <li key={point.key}>
              <EditableContent
                text={point.text}
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
                changeExperienceEdits={this.changeExperienceEdits}
              />
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={this.handleAddPoint}
        >
          Add point
        </button>
        <button
          type="button"
          onClick={this.handleExpRemove}
        >
          Remove
        </button>
      </>
    );
  }
}
