import { Component } from 'react';
import EditableContent from './EditableContent';

export default class Experience extends Component {
  render() {
    const { data, updateState, type } = this.props;
    const experiences = type;
    return (
      <ul>
        {data[experiences].map((exp) => (
          <li key={exp.key}>
            <h4>
              <EditableContent text={exp.title} />
            </h4>
            <h5>
              <EditableContent text={exp.subtitle} />
            </h5>
            <span>
              <EditableContent text={exp.to} />
              {' '}
              -
              {' '}
              <EditableContent text={exp.from} />
            </span>
            <ul>
              {exp.points.map((point) => (
                <li key={point.key}>
                  <EditableContent text={point.text} />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    );
  }
}
