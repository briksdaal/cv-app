import { Component } from 'react';
import EditableContent from './EditableContent';
import handleChildUpdates from './helpers/handleChildUpdates';
import './Header.css';

export default class Header extends Component {
  render() {
    const {
      header,
      changeCurrentEdits,
      updateHeader,
    } = this.props;
    return (
      <div className="header">
        <div className="heading-container">
          <h1>
            <EditableContent
              text={header.h1}
              handleGlobalStateUpdate={(newChild) => handleChildUpdates(header, newChild, 'h1', updateHeader)}
              changeCurrentEdits={changeCurrentEdits}
            />
          </h1>
          <h2>
            <EditableContent
              text={header.h2}
              handleGlobalStateUpdate={(newChild) => handleChildUpdates(header, newChild, 'h2', updateHeader)}
              changeCurrentEdits={changeCurrentEdits}
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
