import { Component } from 'react';
import EditableContent from './EditableContent';

export default class Skills extends Component {
  constructor(props) {
    super(props);

    this.updateLi = this.updateLi.bind(this);
  }

  updateLi(key) {
    return (text) => {
      const { data, updateState } = this.props;
      updateState({
        skills: data.skills.map((skill) => {
          if (skill.key === key) {
            return { ...skill, text };
          }
          return skill;
        }),
      });
    };
  }

  render() {
    const { data, updateState } = this.props;
    return (
      <ul>
        {data.skills.map((skill) => (
          <li key={skill.key}>
            <EditableContent text={skill.text} updateState={updateState} field="headerH1" newData={data.newData} />
          </li>
        ))}
      </ul>
    );
  }
}
