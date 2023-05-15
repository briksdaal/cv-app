import { Component } from 'react';
import SingleExperience from './SingleExperience';
import ActionButton from './ActionButton';
import './styles/Experiences.css';

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
            onClick={this.handleAddExp}
            type="add"
          />
        </li>
      </ul>
    );
  }
}
