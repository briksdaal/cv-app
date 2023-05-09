import { Component } from 'react';
import EditableContent from './EditableContent';

export default class AboutMe extends Component {
  render() {
    const { data, updateState } = this.props;
    return (
      <p>
        <EditableContent text={data.aboutMe} updateState={updateState} field="aboutMe" newData={data.newData} />
      </p>
    );
  }
}
