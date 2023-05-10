import { Component } from 'react';
import EditableContent from './EditableContent';
import './Header.css';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.handleHeaderUpdates = this.handleHeaderUpdates.bind(this);
  }

  handleHeaderUpdates(field, text) {
    const { header, updateState } = this.props;

    const newHeader = {
      ...header,
    };
    newHeader[field] = text;

    updateState({
      header: {
        ...newHeader,
      },
    });
  }

  render() {
    const {
      header,
      editDisabled,
      handleEnableEditMode,
    } = this.props;
    return (
      <div className="header">
        <div className="heading-container">
          <h1>
            <EditableContent
              text={header.h1}
              hadnleGlobalStateUpdate={(text) => this.handleHeaderUpdates('h1', text)}
              editDisabled={editDisabled}
              handleEnableEditMode={handleEnableEditMode}
            />
          </h1>
          <h2>
            <EditableContent
              text={header.h2}
              hadnleGlobalStateUpdate={(text) => this.handleHeaderUpdates('h2', text)}
              editDisabled={editDisabled}
              handleEnableEditMode={handleEnableEditMode}
            />
          </h2>
        </div>
        <div className="img-container">
          <img src={header.img} alt="profile portrait" />
        </div>
      </div>
    );
  }
}
