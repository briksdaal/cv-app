import { Component } from 'react';
import EditableContent from './EditableContent';
import { handleChildUpdates } from './helpers/helperFunctions';

export default class Details extends Component {
  render() {
    const { details, updateDetails, changeCurrentEdits } = this.props;
    return (
      <>
        <EditableContent
          text={details.email}
          className="details-email"
          handleGlobalStateUpdate={(newChild) => handleChildUpdates(details, newChild, 'email', updateDetails)}
          changeCurrentEdits={changeCurrentEdits}
        >
          {details.email}
        </EditableContent>
        <EditableContent
          text={details.phone}
          className="details-phone"
          handleGlobalStateUpdate={(newChild) => handleChildUpdates(details, newChild, 'phone', updateDetails)}
          changeCurrentEdits={changeCurrentEdits}
        >
          {details.phone}
        </EditableContent>
        <EditableContent
          text={details.address}
          className="details-address"
          handleGlobalStateUpdate={(newChild) => handleChildUpdates(details, newChild, 'address', updateDetails)}
          changeCurrentEdits={changeCurrentEdits}
        >
          {details.address}
        </EditableContent>
        <EditableContent
          text={details.url}
          className="details-url"
          handleGlobalStateUpdate={(newChild) => handleChildUpdates(details, newChild, 'url', updateDetails)}
          changeCurrentEdits={changeCurrentEdits}
        >
          {details.url}
        </EditableContent>
      </>
    );
  }
}
