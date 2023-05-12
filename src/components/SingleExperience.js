import { Component } from 'react';
import EditableContent from './EditableContent';
import Button from './Button';
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
        <EditableContent
          text={exp.title}
          className="exp-title"
          handleGlobalStateUpdate={(newChild) => handleLiUpdates(exp.key, experiences, newChild, 'title', updateExperiences)}
          changeCurrentEdits={changeCurrentEdits}
          changeExperienceEdits={this.changeExperienceEdits}
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
          changeExperienceEdits={this.changeExperienceEdits}
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
            changeExperienceEdits={this.changeExperienceEdits}
          >
            {exp.from}
          </EditableContent>
          {' '}
          -
          {' '}
          <EditableContent
            text={exp.to}
            className="exp-to"
            handleGlobalStateUpdate={(newChild) => handleLiUpdates(exp.key, experiences, newChild, 'to', updateExperiences)}
            changeCurrentEdits={changeCurrentEdits}
            changeExperienceEdits={this.changeExperienceEdits}
          >
            {exp.to}
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
                  changeExperienceEdits={this.changeExperienceEdits}
                >
                  {point.text}
                </EditableContent>
              </li>
            ))}
          </ul>
          <Button
            onClick={this.handleAddPoint}
            type="add"
          />
        </div>
        <Button
          onClick={this.handleExpRemove}
          type="remove"
        />
      </>
    );
  }
}
