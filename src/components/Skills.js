import { Component } from 'react';
import EditableContent from './EditableContent';

export default class Skills extends Component {
  render() {
    const { data, updateState } = this.props;
    return (
      <ul>
        {data.skills.map((skill) => (
          <li key={skill.key}>
            <EditableContent text={skill.text} />
          </li>
        ))}
      </ul>
    );
  }
}
