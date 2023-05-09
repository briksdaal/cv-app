import { Component } from 'react';
import EditableContent from './EditableContent';
import './Header.css';

export default class Header extends Component {
  render() {
    const { data, updateState } = this.props;
    return (
      <div className="header">
        <div className="heading-container">
          <h1>
            <EditableContent text={data.headerH1} updateState={updateState} field="headerH1" newData={data.newData} />
          </h1>
          <h2>
            <EditableContent text={data.headerH2} updateState={updateState} field="headerH2" newData={data.newData} />
          </h2>
        </div>
        <div className="img-container">
          <img src={data.headerImg} alt={data.headerImgAlt} />
        </div>
      </div>
    );
  }
}
