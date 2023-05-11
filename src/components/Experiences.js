import { Component } from 'react';
import EditableContent from './EditableContent';
import { handleLiUpdates, handleLiRemove } from './helpers/helperFunctions';
import SingleExperience from './SingleExperience';

export default class Experiences extends Component {
  constructor(props) {
    super(props);

    this.handleAddExp = this.handleAddExp.bind(this);
  }

  handleAddExp() {
    const {
      experiences,
      updateExperiences,
      getNextId,
    } = this.props;

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

  render() {
    const {
      experiences,
      updateExperiences,
      changeCurrentEdits,
      getNextId,
    } = this.props;
    return (
      <>
        <ul>
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
        </ul>
        <button type="button" onClick={this.handleAddExp}>Add Exp</button>
      </>
    );
  }
}
