import { Component } from 'react';
import EditableContent from './EditableContent';
import EditableImage from './EditableImage';
import { handleChildUpdates } from './helpers/helperFunctions';
import './styles/Header.css';

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
          <EditableContent
            text={header.h1}
            className="header-h1"
            handleGlobalStateUpdate={(newChild) => handleChildUpdates(header, newChild, 'h1', updateHeader)}
            changeCurrentEdits={changeCurrentEdits}
          >
            <h1>{header.h1}</h1>
          </EditableContent>
          <EditableContent
            text={header.h2}
            className="header-h2"
            handleGlobalStateUpdate={(newChild) => handleChildUpdates(header, newChild, 'h2', updateHeader)}
            changeCurrentEdits={changeCurrentEdits}
          >
            <h2>{header.h2}</h2>
          </EditableContent>
        </div>
        <EditableImage
          url={header.img}
          handleGlobalStateUpdate={(newChild) => handleChildUpdates(header, newChild, 'img', updateHeader)}
        />
        {/* <div className="img-container">
          <img src={header.img} alt="profile portrait" />
        </div> */}
      </div>
    );
  }
}
